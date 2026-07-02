type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

// Prueba social — primera pieza de testimonio real en la home (Fase 4).
// Pensado para escalar: cuando haya 2-3 testimonios, este mismo componente
// puede repetirse en un carrusel simple sin cambiar el diseño base.
export default function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="mx-auto max-w-lg text-center">
      <blockquote className="text-bodyLg italic leading-relaxed text-black">
        “{quote}”
      </blockquote>
      <p className="mt-5 text-ui font-medium text-black">{author}</p>
      <cite className="text-ui not-italic text-graphite">{role}</cite>
    </div>
  );
}
