import { Link } from "wouter";
import { FadeUp } from "@/components/FadeUp";

export const QuoteCallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[580px] flex items-center overflow-hidden">
      <img
        src="/images/banner-flor.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(40,50,30,0.45)]" />
      <FadeUp className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-16 md:py-20 flex flex-col items-center gap-7 text-center">
        <blockquote className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-white text-[1.5rem] md:text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.35] max-w-[680px]">
          "Os únicos limites da vida são aqueles que estabelecemos."
        </blockquote>
        <Link
          href="/consultas"
          className="btn-pill inline-block px-8 py-3 bg-[#B84C32] text-white rounded-[50px] [font-family:'Literata',Helvetica] font-medium text-base hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          Marcar consulta
        </Link>
      </FadeUp>
    </section>
  );
};
