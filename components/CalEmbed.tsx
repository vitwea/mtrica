"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// ⚠️ Sustituye por tu usuario/evento real de Cal.com
// (lo encuentras en la URL de tu evento: cal.com/TU-USUARIO/TU-EVENTO)
const CAL_LINK = "mtrica/primera-consulta";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#4C5FFF" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}