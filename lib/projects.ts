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
  resultHeadline: "Más del 60% de tus ventas puede depender de un solo cliente sin que lo sepas",
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
      slug: "pyme-comercial-rotacion-absentismo-productividad",
      sector: "Distribución industrial",
      title: "Detectar la fuga de tu mejor equipo antes de que sea irreversible",
      clientProfile: "Distribuidora de ferretería y suministros industriales, con 18 empleados repartidos en cinco departamentos",
      problem:
        "Las bajas del equipo comercial se veían como casos aislados — cada una con su propia explicación puntual. Nadie cruzaba nunca la rotación con el absentismo ni con el cumplimiento de objetivos, así que no había forma de ver que los tres empleados que se fueron llevaban meses acumulando más ausencias y peor rendimiento antes de marcharse. El problema no era la falta de datos, era que vivían en sistemas separados que nadie juntaba nunca.",
      solution:
        "Dashboard en Power BI que cruza asistencia, rendimiento y bajas de todo el personal en un único panel: alertas automáticas cuando el absentismo de un departamento supera el umbral de referencia, un análisis de cumplimiento de objetivos en el tiempo, y un cruce de absentismo contra rendimiento por empleado que aísla visualmente a quienes están en riesgo real, antes de que sea demasiado tarde para retenerlos.",
      impact: [
        { label: "Rotación detectada en el equipo comercial", value: "60%" },
        { label: "Absentismo del equipo en su último mes", value: "13,9%" },
        { label: "Coste estimado de la rotación no detectada", value: "34.218 €" },
      ],
      powerBiEmbedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMjg5ZGM4NmYtZTAxZC00MWVhLTk5OTAtYzhjYTcxYThlYWYxIiwidCI6IjQxZmMzMjYyLWFhZDAtNDc0Zi05NWZjLTQxNDA5OWE1OGFjNiJ9",
      resultHeadline: "6 de cada 10 comerciales se fueron este año, y las señales estaban ahí meses antes",
    },
];