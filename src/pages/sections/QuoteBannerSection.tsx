import { Link } from "wouter";

export const QuoteBannerSection = (): JSX.Element => {
  return (
    <section className="w-full px-5 md:px-10 mb-8 md:mb-10">
      <div className="relative w-full h-[400px] md:h-[588px] rounded-[20px] md:rounded-[30px] overflow-hidden flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero background"
          src="/figmaAssets/bg.png"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 md:gap-8 max-w-[720px] w-full px-6 py-16 md:py-20 text-center">
          <p className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-white text-[1.5rem] leading-[2rem] tracking-tight">
            "Não é mais forte quem sobrevive, nem o mais inteligente,<br className="hidden md:block" />
            mas sim o que melhor se adapta às mudanças."
          </p>
          <span className="[font-family:'Old_Standard_TT',Helvetica] font-normal text-white/75 text-lg md:text-xl tracking-tight">
            Charles Darwin
          </span>
          <Link
            href="/consultas"
            className="btn-pill inline-flex items-center justify-center px-8 py-3 bg-[#B84C32] text-white rounded-[50px] [font-family:'Literata',Helvetica] font-medium text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Marcar consulta
          </Link>
        </div>
      </div>
    </section>
  );
};
