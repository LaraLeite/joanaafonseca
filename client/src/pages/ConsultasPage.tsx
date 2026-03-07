import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";
import { Link } from "wouter";

const horariosCards = [
  {
    icon: "/figmaAssets/icons/icon-duracao.svg",
    title: "Duração",
    items: [
      "Cada sessão tem a duração média de 50 minutos",
      "A primeira sessão poderá ser mais longa",
    ],
  },
  {
    icon: "/figmaAssets/icons/icon-regularidade.svg",
    title: "Regularidade",
    items: [
      "Acompanhamento semanal ou quinzenal",
      "Ajustado às suas necessidades",
    ],
  },
  {
    icon: "/figmaAssets/icons/icon-marcacao.svg",
    title: "Marcação",
    items: [
      "Todas as sessões são agendadas previamente",
      "Por contacto telefónico ou email",
    ],
  },
];

const services = [
  {
    icon: "/figmaAssets/icons/icon-avaliacao.svg",
    title: "Avaliação Psicológica",
    description:
      "Processo estruturado que ajuda a compreender sintomas, dificuldades ou necessidades específicas, recorrendo a entrevistas e testes psicológicos.",
  },
  {
    icon: "/figmaAssets/icons/icon-apoio.svg",
    title: "Apoio Psicológico e Psicoterapêutico",
    description:
      "Um espaço seguro para compreender emoções, pensamentos e comportamentos, promovendo equilíbrio, bem-estar e mudança.",
  },
  {
    icon: "/figmaAssets/icons/icon-parental.svg",
    title: "Aconselhamento Parental",
    description:
      "Estratégias para apoiar pais e mães na educação dos filhos, promovendo o bem-estar da criança/adolescente e da família.",
  },
  {
    icon: "/figmaAssets/icons/icon-psicopedagogico.svg",
    title: "Apoio Psicopedagógico",
    description:
      "Intervenção para crianças e jovens com dificuldades de aprendizagem, atenção ou motivação escolar, estimulando competências e autoestima.",
  },
  {
    icon: "/figmaAssets/icons/icon-consultadoria.svg",
    title: "Consultadoria",
    description:
      "Colaboração com famílias, escolas e instituições para prevenir e resolver dificuldades relacionais, emocionais ou organizacionais.",
  },
  {
    icon: "/figmaAssets/icons/icon-workshops.svg",
    title: "Workshops e Formações",
    description:
      "Formações práticas em temas como gestão de stress, orientação vocacional e métodos de estudo, dirigidas a jovens e adultos.",
  },
];

export const ConsultasPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />

      {/* Hero */}
      <section className="w-full max-w-[1446px] mx-auto px-6 mb-12">
        <div className="relative w-full aspect-[16/9] md:aspect-[1446/584] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl">
          <img
            src="/images/espaco-hero.jpg"
            alt="Consultas Joana Afonseca"
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
        </div>
      </section>

      {/* Título "Consultas" */}
      <section className="w-full flex justify-center px-6 py-20">
        <div className="flex flex-col gap-4 items-center text-center max-w-[888px] w-full">
          <FadeUp as="h1" className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-4xl md:text-5xl leading-tight">
            Consultas
          </FadeUp>
          <FadeUp as="p" className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[30px]" delay={0.12}>
            Todas as sessões decorrem assegurando tranquilidade, privacidade e segurança, para traçar o seu caminho de mudança.
          </FadeUp>
        </div>
      </section>

      {/* Modalidades */}
      <section className="relative w-full overflow-hidden bg-[#f0e2dd] py-16 md:py-20 px-6">
        {/* Decorative background */}
        <img
          src="/figmaAssets/efeitos-bg-consultas.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-12">
          {/* Title */}
          <FadeUp className="flex flex-col gap-4 text-center items-center">
            <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-5xl leading-tight">
              Modalidades
            </h2>
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[30px] max-w-[600px]">
              Escolha a forma de acompanhamento que o faz sentir mais confortável e seguro.
            </p>
          </FadeUp>

          {/* Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Presencial */}
            <FadeUp className="relative aspect-[585/414] rounded-[24px] overflow-hidden shadow-lg" delay={0.1}>
              <img
                src="/images/presencial.jpg"
                alt="Consulta Presencial"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[rgba(184,76,50,0.8)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-10">
                <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#fafafa] text-4xl md:text-5xl leading-tight">
                  Presencial
                </h3>
                <p className="[font-family:'Literata',Helvetica] font-normal text-[#fafafa] texto-sl leading-[30px] max-w-[290px]">
                  No consultório, num espaço tranquilo e reservado.
                </p>
              </div>
            </FadeUp>

            {/* Online */}
            <FadeUp className="relative aspect-[588/420] rounded-[24px] overflow-hidden shadow-lg" delay={0.2}>
              <img
                src="/images/online.jpg"
                alt="Consulta Online"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[rgba(206,136,144,0.8)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-10">
                <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#fafafa] text-4xl md:text-5xl leading-tight">
                  Online
                </h3>
                <p className="[font-family:'Literata',Helvetica] font-normal text-[#fafafa] texto-sl leading-[30px] max-w-[331px]">
                  Através de videochamada, com a mesma qualidade e confidencialidade.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Horário */}
      <section className="w-full bg-bg-lara py-20 px-6">
        <div className="max-w-[1008px] mx-auto flex flex-col gap-10">
          {/* Title */}
          <FadeUp className="flex flex-col gap-4 text-center">
            <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-5xl leading-tight">
              Horário
            </h2>
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[30px]">
              As sessões decorrem de{" "}
              <span className="font-bold">segunda a sexta-feira</span> entre as{" "}
              <span className="font-bold">9h e as 19h00.</span>
            </p>
          </FadeUp>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px]">
            {horariosCards.map((card, i) => (
              <FadeUp
                key={card.title}
                className="bg-[rgba(188,88,125,0.3)] border border-[rgba(255,255,255,0.1)] rounded-[21px] flex flex-col gap-[14px] p-[22px]"
                delay={i * 0.1}
              >
                <div className="flex items-center gap-[10.5px]">
                  <div className="bg-[#F5EBE5] rounded-[12px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                    <img src={card.icon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph text-[18px] leading-[21px]">
                    {card.title}
                  </p>
                </div>
                <ul className="flex flex-col gap-[7px]">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex gap-[7px] items-start">
                      <span className="text-[#1e1e1e] text-[12.25px] leading-[19.9px] shrink-0">•</span>
                      <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph text-[14px] leading-[19.9px]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
          </div>

          {/* Separator */}
          <FadeUp className="flex items-center gap-8 justify-center pt-2" delay={0.3}>
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-[#502f27]/20" />
            <img src="/figmaAssets/icons/icon-flor.svg" alt="" className="w-5 h-5 opacity-50" />
            <div className="flex-1 h-px bg-[#502f27]/20" />
          </div>
          </FadeUp>
        </div>
      </section>

      {/* Serviços */}
      <section className="w-full bg-bg-lara px-6 pb-24">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-14">
          <FadeUp className="flex flex-col gap-[21px] text-center">
            <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-[42px] leading-[42px]">
              Serviços
            </h2>
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph text-[17.5px] leading-[24.5px]">
              Disponibilizamos uma variedade de serviços especializados, adaptados às necessidades de cada pessoa, família ou instituição.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {services.map((service, i) => (
              <FadeUp key={service.title} className="flex flex-col items-center gap-[18px] text-center" delay={i * 0.08}>
                <div className="bg-[#C79DCE] rounded-[12px] w-[52px] h-[52px] flex items-center justify-center shrink-0">
                  <img src={service.icon} alt="" className="w-5 h-5" />
                </div>
                <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal not-italic text-textotitle text-[22px] leading-[24.5px]">
                  {service.title}
                </h3>
                <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph text-[14px] leading-[22.75px]">
                  {service.description}
                </p>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp className="flex justify-center pt-4" delay={0.3}>
            <Link
              href="/contacto"
              className="inline-block px-10 py-4 rounded-[50px] bg-medium-carmine text-white [font-family:'Literata',Helvetica] font-medium texto-sl hover:bg-[#9a3f2a] transition-colors duration-200 shadow-md"
            >
              Marcar consulta
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
};
