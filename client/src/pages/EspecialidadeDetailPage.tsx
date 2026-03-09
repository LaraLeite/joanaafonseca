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
  symptoms?: string[];
  situations?: string[];
}> = {
  "ansiedade": {
    title: "Perturbações de ansiedade",
    image: "/images/area-ansiedade.jpg",
    cardImage: "/figmaAssets/frame-5-2.svg",
    intro: "A ansiedade não é uma doença, no sentido em que não se pode constituir por si só como um diagnóstico.",
    paragraphs: [
      "O medo é uma emoção adaptativa, que funciona como um estímulo e tem um efeito protetor. É normal sentirmo-nos ansiosos perante um novo desafio, é essa ansiedade que nos torna mais alerta para avaliar a \"ameaça\" e conseguir agir rapidamente. É esse sentimento que nos faz ultrapassar um desafio, procurar a solução, que nos torna mais atentos, ou que motiva a recusa de uma situação potencialmente perigosa.",
      "É quando esse medo se instala, exacerbado, prolongando-se além do que seria normal para cumprir essa função adaptativa, que surgem diferentes tipos de problemas, as denominadas perturbações de ansiedade. As perturbações de ansiedade diagnosticadas normalmente surgem na infância e vão evoluindo até à idade adulta. Quando se mantêm, isso significa que a pessoa não está a conseguir gerir o medo.",
      "A ansiedade é uma reação normal ao stress do dia-a-dia. Apenas se pode falar em perturbações de ansiedade quando existe um medo e ansiedade desproporcionado, que perduram há pelo menos seis meses e que têm impacto na vida quotidiana. Existem diversas perturbações de ansiedade, nomeadamente as fobias, os ataques de pânico, a perturbação de ansiedade generalizada, o stress pós-traumático, entre outras.",
    ],
    symptoms: [
      "Taquicardia",
      "Falta de ar",
      "Dificuldade em respirar (sensação de sufoco)",
      "Suores repentinos",
      "Evitar sítios ou pessoas",
      "Dificuldades de regulação emocional (agressividade, impulsividade, ataques de pânico, etc.)",
    ],
  },
  "humor": {
    title: "Perturbações de humor",
    image: "/images/area-humor.jpg",
    cardImage: "/figmaAssets/frame-5-3.svg",
    intro: "Este tipo de perturbação carateriza-se pela predominância do humor triste, perda de interesse e prazer nas atividades habituais, lentidão excessiva, sentimentos de desvalorização pessoal e diminuição das funções cognitivas.",
    paragraphs: [
      "Um transtorno do humor é diagnosticado quando a tristeza ou euforia é excessivamente intensa, é acompanhada por determinados sintomas típicos e compromete a capacidade funcional física e social e no trabalho.",
      "As perturbações afetivas, também conhecidas como perturbações do humor, trazem impacto negativo às vivências pessoais e têm como caraterística central um aumento na intensidade com que as emoções são experienciadas.",
      "A tristeza é uma resposta natural em situações de perda e desilusão, fazendo parte das experiências quotidianas. Contudo, estas enquadram-se nas perturbações do humor quando a tristeza ou o seu oposto são excessivamente intensas, têm maior durabilidade ao longo do tempo, são acompanhadas por outros sintomas e têm impacto no quotidiano, prejudicando o normal funcionamento da pessoa no trabalho e nos restantes contextos de vida.",
    ],
  },
  "crise": {
    title: "Intervenção em crise",
    image: "/images/area-crise.jpg",
    cardImage: "/figmaAssets/frame-5.svg",
    intro: "Ao Psicólogo compete assegurar os cuidados psicológicos à população vitimada e aos seus familiares, bem como às equipas de emergência.",
    paragraphs: [
      "Os objetivos passam por promover o desenvolvimento de estratégias ativas de adaptação em situações de crise, minimizar o impacto negativo do evento, restaurar o nível funcional e prevenir a exacerbação de sintomatologia psicológica.",
      "Na prossecução destes objetivos, o Psicólogo procede à avaliação, estabilização emocional, aconselhamento e referenciação, propõe meios de emergência médica adequados a cada situação, aconselha os profissionais sobre como proceder em contextos de crise psicológica e diligencia a articulação com outras entidades, quando tal se revele benéfico e necessário.",
    ],
    situations: [
      "Tentativas e Risco de Suicídio",
      "Episódios Depressivos",
      "Crises de Ansiedade e Ataque de Pânico",
      "Crises Psicóticas ou Episódios Dissociativos",
      "Aconselhamento na Notificação de Morte",
      "Violência Doméstica / Violação / Abuso Sexual",
      "Situações de Choque Emocional",
      "Acidentes de Viação",
      "Emergências Psiquiátricas",
      "Situações graves que envolvam crianças",
      "Paragem Cardiorrespiratória inesperada",
      "Morte Inesperada e/ou Traumática",
    ],
  },
  "regulacao-emocional": {
    title: "Regulação emocional",
    image: "/images/area-emocional.jpg",
    cardImage: "/figmaAssets/frame-5-5.svg",
    intro: "Todos nós temos emoções que podem ser agradáveis como a alegria, o amor — ou negativas como medo, raiva, vergonha, culpa e ciúmes. Porém, nem todos conseguem reconhecê-las, nomeá-las e lidar com elas de forma efetiva.",
    paragraphs: [
      "As emoções desempenham um importante papel nas nossas vidas, comunicando as nossas necessidades, as frustrações, o que nos entristece ou nos alegra. Identificar estas emoções é fundamental para que possamos realizar as mudanças necessárias em direção a quem ou ao que nos faz mais felizes.",
      "A regulação emocional é definida como a habilidade de manter, aumentar ou diminuir um ou mais componentes da resposta emocional, incluindo os sentimentos, comportamentos e respostas fisiológicas que constituem as emoções. Refere-se ainda à capacidade de compreender e aceitar a sua experiência emocional de modo a utilizar estratégias saudáveis.",
      "A desregulação emocional é a inabilidade de processar emoções, intensificando-as ou desativando-as de maneira intensa. Está associada a muitas perturbações psicológicas como depressão major, ansiedade, dependência química e perturbações da personalidade.",
    ],
  },
  "mudanca-vida": {
    title: "Adaptação à mudança e fases do ciclo de vida",
    image: "/images/sobre-mim.jpg",
    cardImage: "/figmaAssets/frame-5-1.svg",
    intro: "Ao longo do desenvolvimento de uma família, esta passa por fases que exigirão mudanças para adaptação dessa nova fase e requer tarefas específicas para cada uma delas.",
    paragraphs: [
      "Existem situações como o divórcio, recasamento, adolescência, doenças crónicas, morte inesperada e tantas outras que são geradoras de stress. O sofrimento familiar é comum e esperado nesses momentos — são momentos marcados por crises emocionais inevitáveis, mas é possível encará-los de uma maneira que possibilite um desenvolvimento familiar saudável.",
      "A necessidade de adaptação, de incluir novos hábitos é uma oportunidade de começar novamente, de reconhecer competências, de se posicionar e responsabilizar pelo seu futuro, prosperando com as experiências.",
      "A mudança de uma fase para outra pode gerar ansiedades, conflitos e disfunção das relações familiares. Para minimizar o impacto, esse ajustamento vai exigir flexibilidade, um diálogo saudável que possibilite negociações e colaboração dos membros familiares. A terapia é uma ação focada nas relações estabelecidas pelo sistema familiar, com o objetivo de promover mudanças e ampliar a compreensão dos conflitos vivenciados.",
    ],
  },
  "stress": {
    title: "Gestão de stress",
    image: "/images/area-stress.jpg",
    cardImage: "/figmaAssets/frame-5-4.svg",
    intro: "Entende-se por Stress a resposta fisiológica e comportamental a determinado acontecimento, levando a pessoa a sentir-se ameaçada e interferindo com o seu equilíbrio.",
    paragraphs: [
      "Perante situações de ameaça de perigo, ativamos naturalmente dois tipos de resposta automática denominadas como \"luta ou fuga\" ou de \"congelamento\". Este é um processo natural que tem caraterísticas adaptativas, no entanto, em alguns casos, a experiência de stress prolonga-se por períodos longos de tempo, podendo tornar-se doloroso.",
      "O stress é um fator determinante da qualidade de vida e uma das principais causas de doença, bem como um dos principais promotores de Burnout, com implicações diretas quer na saúde dos indivíduos como nos seus resultados profissionais.",
      "Por norma, a pessoa que sofre com stress sente que não consegue controlar o seu tempo ou gerir todas as tarefas que tem a seu cargo, causando impacto quer na sua vida pessoal, como no desempenho profissional.",
    ],
    symptoms: [
      "Diminuição da produtividade",
      "Apatia",
      "Perturbação de sono (sensação de acordar desgastado)",
      "Cansaço constante",
      "Dificuldades de concentração e de memória",
      "Irritabilidade constante",
      "Dores de cabeça",
      "Tensão e rigidez muscular",
      "Taquicardia",
      "Tonturas",
      "Insónia",
    ],
  },
};


const allSpecialties = [
  { title: "Perturbações de ansiedade", description: "Quando o medo e a preocupação se tornam constantes e limitam a vida quotidiana.", image: "/images/area-ansiedade.jpg", href: "/especialidades/ansiedade" },
  { title: "Perturbações de humor", description: "Tristeza profunda, perda de energia ou euforia excessiva que afetam o dia a dia.", image: "/images/area-perturbarcoes.jpg", href: "/especialidades/humor" },
  { title: "Intervenção em crise", description: "Apoio psicológico imediato em situações de choque, perda, violência, doença ou acontecimentos traumáticos.", image: "/images/area-crise.jpg", href: "/especialidades/crise" },
  { title: "Regulação emocional", description: "Aprender a reconhecer, aceitar e gerir emoções de forma saudável.", image: "/images/area-regulacao.jpg", href: "/especialidades/regulacao-emocional" },
  { title: "Adaptação à mudança", description: "Apoio em fases desafiantes da vida, como adolescência, parentalidade, divórcio ou luto.", image: "/images/area-adaptacao.jpg", href: "/especialidades/mudanca-vida" },
  { title: "Gestão de stress", description: "Ferramentas práticas para lidar com a pressão, prevenir o burnout e recuperar qualidade de vida.", image: "/images/area-stress.jpg", href: "/especialidades/stress" },
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
            
            {data.symptoms && (
              <FadeUp as="div" className="flex flex-col gap-3" delay={0.3}>
                <p className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-xl">Sinais de alerta</p>
                <ul className="flex flex-col gap-2">
                  {data.symptoms.map((s, i) => (
                    <li key={i} className="flex gap-2 items-start [font-family:'Literata',Helvetica] text-textoparagraph texto-sl">
                      <span className="shrink-0 mt-1 text-[#B84C32]">•</span>{s}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            )}
            
            {data.situations && (
              <FadeUp as="div" className="flex flex-col gap-3" delay={0.3}>
                <p className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-xl">Situações de intervenção</p>
                <ul className="flex flex-col gap-2">
                  {data.situations.map((s, i) => (
                    <li key={i} className="flex gap-2 items-start [font-family:'Literata',Helvetica] text-textoparagraph texto-sl">
                      <span className="shrink-0 mt-1 text-[#B84C32]">•</span>{s}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            )}
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
                    <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle md:text-3xl  text-xl leading-tight">
                      {item.title}
                    </h3>
                    <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-relaxed">
                      {item.description}
                    </p>
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
