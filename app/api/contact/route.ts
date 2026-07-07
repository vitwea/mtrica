import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const LOGO_URL = "https://mtrica.com/logo-email.png";

function emailShell(bodyHtml: string) {
  return `
  <!DOCTYPE html>
  <html lang="es">
    <body style="margin:0; padding:0; background-color:#F4F3F0; font-family: Arial, Helvetica, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F3F0; padding: 32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:560px;" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding-bottom: 24px;">
                  <img src="${LOGO_URL}" alt="Mtrica" width="140" style="display:block; border:0;" />
                </td>
              </tr>
              <tr>
                <td style="background-color:#ffffff; border-radius:16px; padding: 32px; border: 1px solid rgba(0,0,0,0.08);">
                  ${bodyHtml}
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top: 20px;">
                  <p style="margin:0; font-size:12px; color:#9A9A9A;">
                    Mtrica — Business Intelligence para pymes
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function highlightedMessageBlock(message: string) {
  return `
    <p style="margin:0 0 8px; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; color:#4C5FFF;">
      Mensaje
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F3F0; border-left: 3px solid #4C5FFF; border-radius: 8px; margin-bottom: 20px;">
      <tr>
        <td style="padding: 16px 20px;">
          <p style="margin:0; font-size:15px; line-height:1.6; color:#0F1526; white-space:pre-wrap;">${escapeHtml(message)}</p>
        </td>
      </tr>
    </table>`;
}

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY no configurada — revisa .env.local (ver .env.local.example)"
      );
      return NextResponse.json(
        { error: "El servicio de email no está configurado todavía." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email interno — te avisa a ti
    const internalHtml = emailShell(`
      <p style="margin:0 0 20px; font-size:18px; font-weight:700; color:#0F1526;">
        Nuevo contacto de ${escapeHtml(name)}
      </p>
      <p style="margin:0 0 4px; font-size:14px; color:#3F3F3F;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 20px; font-size:14px; color:#3F3F3F;"><strong>Empresa:</strong> ${escapeHtml(company || "-")}</p>
      ${highlightedMessageBlock(message)}
    `);

    const internalResult = await resend.emails.send({
      from: "Mtrica <hola@mtrica.com>",
      to: process.env.CONTACT_EMAIL || "hola@mtrica.com",
      reply_to: email,
      subject: `Nuevo contacto de ${name}`,
      html: internalHtml,
      text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company || "-"}\n\nMensaje:\n${message}`,
    });

    if (internalResult.error) {
      console.error("Resend error (email interno):", internalResult.error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
        { status: 500 }
      );
    }

    // Email de confirmación — avisa al cliente de que su consulta llegó bien
    const confirmHtml = emailShell(`
      <p style="margin:0 0 8px; font-size:20px; font-weight:700; color:#0F1526;">
        Hola ${escapeHtml(name)},
      </p>
      <p style="margin:0 0 20px; font-size:15px; line-height:1.6; color:#3F3F3F;">
        Hemos recibido tu consulta correctamente. Te respondemos en menos de 24h.
      </p>
      ${highlightedMessageBlock(message)}
      <p style="margin:0; font-size:14px; line-height:1.6; color:#6B6B6B;">
        Un saludo,<br/>
        El equipo de Mtrica
      </p>
    `);

    const confirmResult = await resend.emails.send({
      from: "Mtrica <hola@mtrica.com>",
      to: email,
      subject: "Hemos recibido tu mensaje — Mtrica",
      html: confirmHtml,
      text: `Hola ${name},\n\nHemos recibido tu consulta correctamente. Te respondemos en menos de 24h.\n\nEsto es lo que nos has contado:\n"${message}"\n\nUn saludo,\nEl equipo de Mtrica`,
    });

    if (confirmResult.error) {
      console.error("Resend error (email confirmación):", confirmResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando el formulario de contacto:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}