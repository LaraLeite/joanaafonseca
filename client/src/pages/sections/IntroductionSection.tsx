import { FadeUp } from "@/components/FadeUp";

export const IntroductionSection = (): JSX.Element => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#B84C32]">
        <img
          src="/figmaAssets/about-efeitos.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-screen pointer-events-none"
        />
        <div className="relative max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[500px] md:min-h-[730px] py-16 md:py-0">
          <FadeUp className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-white text-3xl leading-[1.166] tracking-tight">
              Fortaleça o seu<br />
              bem estar mental
            </h2>
            <p className="texto-lg [font-family:'Literata',Helvetica] font-normal text-white/85">
              O meu nome é <strong className="font-semibold">Joana Afonseca</strong>, sou Psicóloga Clínica, e o meu propósito é acolher e caminhar ao lado de quem procura transformação, oferecendo 
              um espaço seguro onde cada pessoa se possa sentir verdadeiramente compreendida.<span class="block mt-4"> Acredito numa abordagem integrativa e personalizada, que respeita a singularidade de cada história e de 
              cada percurso.</span> <span class="block mt-4"> Com presença, empatia e cuidado, procuro apoiar cada pessoa a encontrar o seu próprio caminho de crescimento, equilíbrio e bem-estar.</span>
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="hidden md:flex justify-end items-end">
            <img
              className="w-full max-w-[464px] h-[600px] object-cover object-top rounded-[24px]"
              alt="Joana Afonseca"
              src="/images/joana-foto.jpg"
            />
          </FadeUp>
        </div>
      </section>

      <div className="w-full overflow-hidden" style={{ marginTop: "-2px" }}>
        <img
          src="/figmaAssets/onda.svg"
          alt=""
          className="w-full block"
        />
      </div>
    </>
  );
};
