import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";
import { Link, useRoute } from "wouter";

const specialtiesData: Record<string, {
  title: string;
  image: string;
  cardImage: string;
  intro: string;
  paragraphs: string[];
}> = {
  "ansiedade": {
    title: "Perturbações de ansiedade",
    image: "/images/area-ansiedade.jpg",
    cardImage: "/images/area-ansiedade-banner.jpg",
    intro: "A ansiedade não é uma doença no sentido em que não se pode constituir por si só como um diagnóstico.",
    paragraphs: [
      "O medo é uma emoção adaptativa, que funciona como um estímulo e tem um efeito protetor. É normal sentirmo-nos ansiosos perante um novo desafio, um acontecimento importante ou uma situação de incerteza. No entanto, quando a ansiedade se torna excessiva, persistente e desproporcional ao contexto, pode transformar-se num obstáculo significativo à vida quotidiana.",
      "As perturbações de ansiedade incluem um conjunto de condições clínicas como a perturbação de ansiedade generalizada, a perturbação de pânico, as fobias específicas, a perturbação de ansiedade social, entre outras. Cada uma tem características próprias, mas todas partilham uma resposta de medo e apreensão que pode limitar a liberdade e o bem-estar da pessoa.",
      "A intervenção psicológica permite compreender os mecanismos da ansiedade, identificar os pensamentos e comportamentos que a alimentam e desenvolver estratégias eficazes para a regular. Com acompanhamento adequado, é possível retomar uma vida mais tranquila, presente e plena."
    ]
  },
  "humor": {
    title: "Perturbações de humor",
    image: "/images/area-humor.jpg",
    cardImage: "/images/area-humor.jpg",
    intro: "As perturbações de humor afetam significativamente o estado emocional, a energia e a qualidade de vida de quem as vive.",
    paragraphs: [
      "Tristeza profunda e persistente, perda de interesse em atividades anteriormente prazerosas, alterações no sono e no apetite, fadiga constante e dificuldade de concentração são alguns dos sinais que podem indicar a presença de uma perturbação depressiva. Por outro lado, estados de euforia intensa, impulsividade e necessidade reduzida de dormir podem estar associados a perturbações bipolares.",
      "As perturbações de humor não se tratam de fraqueza ou falta de vontade. São condições clínicas reconhecidas que merecem atenção, compreensão e cuidado especializado. Muitas pessoas vivem anos sem reconhecer o que sentem ou sem saber que existe ajuda disponível.",
      "A psicoterapia oferece um espaço seguro para explorar o que está na origem do sofrimento emocional, compreender os padrões que mantêm a perturbação e construir recursos internos e externos que promovam maior equilíbrio e bem-estar. A recuperação é possível e o caminho começa por pedir ajuda."
    ]
  },
  "crise": {
    title: "Intervenção em crise",
    image: "/images/area-crise.jpg",
    cardImage: "/images/area-crise.jpg",
    intro: "Há momentos na vida em que o peso do que acontece excede os recursos de que dispomos para o enfrentar.",
    paragraphs: [
      "Uma perda súbita, um diagnóstico grave, uma situação de violência, um acidente ou qualquer acontecimento perturbador pode desencadear uma crise emocional. Nesses momentos, é comum sentir confusão, desespero, entorpecimento ou uma sensação de que o chão desapareceu sob os pés.",
      "A intervenção em crise tem como objetivo proporcionar apoio imediato, estabilizar emocionalmente e ajudar a encontrar formas de atravessar o momento difícil com maior segurança. Não se trata de apagar o que aconteceu, mas de encontrar forças para continuar.",
      "Com acompanhamento psicológico especializado, é possível processar o que foi vivido, integrar a experiência e retomar gradualmente o equilíbrio e a funcionalidade. A crise, quando atravessada com suporte, pode também tornar-se um ponto de viragem para um maior autoconhecimento e resiliência."
    ]
  },
  "regulacao-emocional": {
    title: "Regulação emocional",
    image: "/images/area-emocional.jpg",
    cardImage: "/images/area-emocional-banner.jpg",
    intro: "As emoções são uma parte essencial da nossa experiência humana — não devem ser suprimidas, mas compreendidas e acolhidas.",
    paragraphs: [
      "A regulação emocional refere-se à capacidade de reconhecer, compreender e gerir as nossas emoções de forma adaptativa. Quando esta capacidade está comprometida, podemos reagir de formas que nos prejudicam a nós e às nossas relações: explosões de raiva, isolamento, comportamentos impulsivos ou um estado de entorpecimento emocional constante.",
      "Muitas pessoas cresceram em ambientes onde as emoções não eram bem-vindas ou não sabiam como expressá-las de forma saudável. Isso pode deixar marcas profundas na forma como nos relacionamos connosco mesmos e com os outros.",
      "A psicoterapia é um espaço privilegiado para desenvolver competências de regulação emocional: aprender a nomear o que sentimos, a tolerar desconforto emocional sem reagir de forma impulsiva e a criar respostas mais conscientes e equilibradas perante os desafios do quotidiano."
    ]
  },
  "mudanca-vida": {
    title: "Adaptação à mudança e fases do ciclo de vida",
    image: "/images/area-mudanca-banner.jpg",
    cardImage: "/images/area-mudanca-banner.jpg",
    intro: "A vida é feita de ciclos, transições e momentos de passagem que exigem adaptação e novos recursos internos.",
    paragraphs: [
      "A adolescência, o início da vida adulta, a entrada na parentalidade, a reforma, o luto ou o fim de uma relação são apenas alguns exemplos de fases que, mesmo sendo esperadas, podem gerar sofrimento, desorientação e dificuldade em encontrar um novo equilíbrio.",
      "Noutras vezes, são mudanças imprevistas — uma perda de emprego, uma mudança de país, o diagnóstico de uma doença — que nos obrigam a reorganizar a nossa vida de forma não planeada. Em qualquer caso, o processo de adaptação pode ser longo e exigente.",
      "O acompanhamento psicológico nestes momentos oferece um espaço de reflexão, contenção e apoio para atravessar a transição com mais clareza e serenidade. Com suporte adequado, é possível transformar a mudança numa oportunidade de crescimento e renovação."
    ]
  },
  "stress": {
    title: "Gestão de stress",
    image: "/images/area-stress.jpg",
    cardImage: "/images/area-stress.jpg",
    intro: "O stress faz parte da vida, mas quando se torna crónico e avassalador, compromete a saúde, as relações e a qualidade de vida.",
    paragraphs: [
      "Sinais como irritabilidade constante, dificuldade em desligar, insónia, dores físicas sem causa aparente, falta de concentração ou sensação de estar sempre a correr podem indicar que os níveis de stress ultrapassaram o que o organismo consegue suportar de forma saudável.",
      "O burnout, cada vez mais prevalente, é uma das consequências mais sérias do stress crónico. Caracteriza-se por um esgotamento profundo — físico, emocional e mental — frequentemente associado ao contexto profissional, mas que pode surgir em qualquer área da vida.",
      "A intervenção psicológica na gestão de stress passa por identificar os fatores que o alimentam, desenvolver estratégias de coping eficazes, recuperar o equilíbrio entre exigências e recursos e aprender a criar espaço para o descanso, o prazer e a presença. É possível viver com mais leveza."
    ]
  }
};

const allSpecialties = [
  { title: "Perturbações de ansiedade", image: "/images/area-ansiedade.jpg", href: "/especialidades/ansiedade" },
  { title: "Perturbações de humor", image: "/images/area-perturbarcoes.jpg", href: "/especialidades/humor" },
  { title: "Intervenção em crise", image: "/images/area-crise.jpg", href: "/especialidades/crise" },
  { title: "Regulação emocional", image: "/images/area-regulacao.jpg", href: "/especialidades/regulacao-emocional" },
  { title: "Adaptação à mudança", image: "/images/area-adaptacao.jpg", href: "/especialidades/mudanca-vida" },
  { title: "Gestão de stress", image: "/images/area-perturbarcoes.svg", href: "/especialidades/stress" },
];

export const EspecialidadeDetailPage = (): JSX.Element => {
  const [, params] = useRoute("/especialidades/:slug");
  const slug = params?.slug || "ansiedade";
  const data = specialtiesData[slug] || specialtiesData["ansiedade"];

  const others = allSpecialties.filter(s => !s.href.endsWith(slug)).slice(0, 3);

  return (
    <main className="flex flex-col w-full items-center min-h-screen">

      {/* Bloco principal: nav + conteúdo + CTA — fundo #F5EBE5 com flor-caso.svg */}
      <div className="relative w-full overflow-hidden bg-[#F5EBE5] flex flex-col items-center">
        <img
          src="/figmaAssets/flor-caso.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none"
        />

        <div className="relative z-10 w-full flex flex-col items-center">
          <MainNavigationSection />

          {/* Title + Hero Image */}
          <section className="w-full max-w-[1200px] mx-auto px-6 pt-4 md:pt-8 pb-10 flex flex-col gap-8 items-center">
            <FadeUp as="h1" className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-5xl text-center tracking-tight leading-tight max-w-3xl">
              {data.title}
            </FadeUp>
            <FadeUp className="w-full relative aspect-[16/9] md:aspect-[1200/560] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl" delay={0.15}>
              <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </FadeUp>
          </section>

          {/* Content */}
          <section className="w-full max-w-[860px] mx-auto px-6 pb-16 flex flex-col gap-8">
            <FadeUp as="p" className="[font-family:'Literata',Helvetica] font-semibold text-textoparagraph texto-lg leading-relaxed">
              {data.intro}
            </FadeUp>
            {data.paragraphs.map((p, i) => (
              <FadeUp key={i} as="p" className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-relaxed" delay={i * 0.1 + 0.1}>
                {p}
              </FadeUp>
            ))}
          </section>

          {/* CTA */}
          <section className="w-full px-6 pb-24 flex items-center justify-center">
            <FadeUp>
              <Link
                href="/consultas"
                className="inline-block px-10 py-4 rounded-[50px] bg-medium-carmine text-white [font-family:'Literata',Helvetica] font-medium texto-sl hover:bg-[#9a3f2a] transition-colors duration-200 shadow-md"
              >
                Marcar consulta
              </Link>
            </FadeUp>
          </section>
        </div>
      </div>

      {/* Outras áreas */}
      <section className="w-full bg-bg-lara py-20 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <FadeUp className="flex flex-col gap-2 text-center">
            <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-4xl">
              Outras áreas
            </h2>
            <p className="[font-family:'Literata',Helvetica] font-normal italic text-[#AB8B9A] texto-lg">
              Clínica presencial e digital
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {others.map((item, i) => (
              <FadeUp key={item.href} className="flex flex-col gap-5" delay={i * 0.1}>
                <Link href={item.href} onClick={() => window.scrollTo(0, 0)}>
                  <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover hover:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-3">
                  <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-xl leading-tight">
                    {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="btn-pill inline-block w-fit px-6 py-2.5 rounded-[50px] border border-[#C79DCE] [font-family:'Literata',Helvetica] font-medium text-[#893420] text-base hover:bg-[#B84C32] hover:text-white hover:border-[#B84C32] transition-all duration-200"
                  >
                    Saiba mais
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
