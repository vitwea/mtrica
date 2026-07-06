export type ImpactMetric = { label: string; value: string };

export type Project = {
  slug: string;
  sector: string;
  title: string;
  clientProfile: string;
  problem: string;
  solution: string;
  impact: ImpactMetric[];
  // ⚠️ "Publish to Web" es público sin login. No pegues aquí cifras
  // reales de un cliente sin su autorización explícita — usa datos de
  // muestra que reproduzcan la misma estructura del panel real.
  powerBiEmbedUrl: string;
  resultHeadline: string; // para la tarjeta del listado
};

export const projects: Project[] = [
  {
  slug: "pyme-ferreteria-concentracion-clientes-margen",
  sector: "Distribución industrial",
  title: "Descubrir de qué cliente depende realmente tu negocio antes de que sea tarde",
  clientProfile: "Distribuidora de ferretería y suministros industriales con seis clientes mayoristas en España",
  problem:
    "La facturación crecía mes a mes y todo parecía ir bien. Pero nadie cruzaba las ventas con el coste real por cliente y producto: los descuentos comerciales acumulados a un solo cliente se estaban comiendo el margen sin aparecer en ningún informe, y un producto concreto llevaba meses vendiéndose por debajo de coste sin que nadie lo detectara.",
  solution:
    "Dashboard en Power BI con alertas automáticas que se activan cuando el margen de un cliente cae por debajo de la media del resto de la cartera, un mapa de concentración de ventas por cliente, y un análisis de rentabilidad por producto que saca a la luz lo que las vistas agregadas esconden. Todo filtrable por cliente, periodo y categoría desde el propio panel.",
  impact: [
    { label: "De las ventas totales dependen de un solo cliente", value: "67,63%" },
    { label: "Margen medio real detectado", value: "34,02%" },
    { label: "Margen de un producto oculto, vendido con pérdida", value: "-8,3%" },
  ],
  powerBiEmbedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiN2ZmZmIzNzYtMWM2ZS00YmM0LWIyOWQtYTQ4NzE0YzNlZjc1IiwidCI6IjQxZmMzMjYyLWFhZDAtNDc0Zi05NWZjLTQxNDA5OWE1OGFjNiJ9",
  resultHeadline: "67,63% de tus ventas puede depender de un solo cliente sin que lo sepas",
  },
  {
    slug: "pyme-distribucion-tesoreria-facturas-vencidas",
    sector: "Distribución industrial",
    title: "Ver la caída de tesorería antes de que se quede sin fondos",
    clientProfile: "Distribuidora de ferretería y suministros industriales, con seis clientes mayoristas y pagos habituales a cinco proveedores",
    problem:
      "Los cobros a clientes y los pagos a proveedores se gestionaban en hojas separadas, sin cruzarlos nunca con la evolución real de caja. Cada mes la facturación parecía sana, pero nadie sumaba cuánto tardaban en cobrar de media ni cuánto crecía el importe pendiente — hasta que la tesorería empezó a caer mes tras mes sin que ningún informe lo avisara con antelación.",
    solution:
      "Dashboard en Power BI que cruza tesorería, facturas emitidas y facturas recibidas en un único panel: alertas automáticas cuando el saldo o el importe vencido superan la media histórica del negocio, un análisis de antigüedad de la deuda pendiente, y una comparativa mensual de cobros contra pagos que señala el momento exacto en que empezaron a cruzarse.",
    impact: [
      { label: "Saldo de tesorería proyectado", value: "-7.601,52 €" },
      { label: "Importe pendiente de cobro detectado", value: "60.950,40 €" },
      { label: "Días medios de cobro identificados", value: "63 días" },
    ],
    powerBiEmbedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMGIzZWZmMzYtZmYzNy00NDljLWE2ODgtZDhlNTY0Zjk0ODk0IiwidCI6IjQxZmMzMjYyLWFhZDAtNDc0Zi05NWZjLTQxNDA5OWE1OGFjNiJ9",
    resultHeadline: "Tu tesorería puede quedarse en negativo sin que ningún informe mensual te avise a tiempo",
  },
  {
    slug: "PENDIENTE-soporte-mantenimiento",
    sector: "Servicios profesionales",
    title: "[PENDIENTE: título real del proyecto]",
    clientProfile: "[PENDIENTE: perfil del cliente]",
    problem: "[PENDIENTE]",
    solution: "[PENDIENTE]",
    impact: [
      { label: "[PENDIENTE]", value: "[PENDIENTE]" },
      { label: "[PENDIENTE]", value: "[PENDIENTE]" },
    ],
    powerBiEmbedUrl: "https://app.powerbi.com/view?r=PENDIENTE_SUSTITUIR",
    resultHeadline: "[PENDIENTE] pero or algun razon razon razon tas  da  kadd",
  },
];