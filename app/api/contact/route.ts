import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    await resend.emails.send({
      // "onboarding@resend.dev" funciona sin verificar dominio propio.
      // En cuanto verifiques mtrica.com en Resend, cambia esto a algo como
      // "Mtrica <contacto@mtrica.com>".
      from: "Mtrica <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "hola@mtrica.com",
      reply_to: email,
      subject: `Nuevo contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company || "-"}\n\nMensaje:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando el formulario de contacto:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
