import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";

export const EspacoPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />

      {/* Hero Section */}
      <section className="w-full max-w-[1446px] mx-auto px-6 mb-12">
        <div className="relative w-full aspect-[16/9] md:aspect-[1446/584] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl">
          <img
            src="/images/espaco-hero.jpg"
            alt="Consultório Joana Afonseca"
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full flex justify-center px-6 py-12 md:py-16">
        <div className="flex max-w-[953px] w-full justify-center gap-6 flex-col items-center text-center">
          <FadeUp as="h1" className="w-full [font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-5xl tracking-tight leading-tight">
            Bem-vindo(a)
          </FadeUp>
          <FadeUp as="p" className="texto-sl w-full [font-family:'Literata',Helvetica] font-normal text-textoparagraph leading-relaxed" delay={0.15}>
            Este é um espaço onde pode desacelerar, respirar e simplesmente ser. Um lugar de escuta e cuidado,
            pensado para o(a) acompanhar no caminho de reencontro consigo mesmo(a). Aqui, cada passo é acolhido
            com respeito e confiança, para que possa abrir espaço a novas possibilidades, maior equilíbrio e uma vida
            mais leve e plena.
          </FadeUp>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative w-full">
        {/* Wave top — elemento inline, fora do overflow-hidden */}
        <img
          src="/figmaAssets/wave-sobre.svg"
          alt=""
          aria-hidden="true"
          className="w-full block"
          style={{ transform: 'scaleY(-1)', marginBottom: '-2px' }}
          loading="lazy"
        />

        {/* Section body */}
        <div className="relative bg-[#F0E2DD] overflow-hidden">
          {/* Leaf decoration */}
          <img
            src="/figmaAssets/efeitos-sobre-leaf.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-auto pointer-events-none select-none opacity-100"
            loading="lazy"
          />

          {/* Photos grid */}
          <div className="relative z-10 w-full max-w-[1446px] mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 md:gap-6">
              {/* Main large image */}
              <FadeUp className="relative aspect-[4/5] md:aspect-auto rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg">
                <img
                  src="/images/espaco-sala.jpg"
                  alt="Sala de consulta"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </FadeUp>

              {/* Right column: two stacked images */}
              <div className="flex flex-col gap-4 md:gap-6">
                <FadeUp className="relative aspect-video rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg" delay={0.1}>
                  <img
                    src="/images/espaco-detalhe1.jpg"
                    alt="Detalhe do consultório"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </FadeUp>
                <FadeUp className="relative aspect-video rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg" delay={0.2}>
                  <img
                    src="/images/espaco-detalhe2.jpg"
                    alt="Joana Afonseca no consultório"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </FadeUp>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom — ondulado para baixo, cria transição #F0E2DD → bg-lara */}
        <img
          src="/figmaAssets/wave-sobre.svg"
          alt=""
          aria-hidden="true"
          className="relative w-full block -mt-[2px]"
          loading="lazy"
        />
      </section>

      <Footer />
    </main>
  );
};
