import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

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
    description: "Processo estruturado que ajuda a compreender sintomas, dificuldades ou necessidades específicas, recorrendo a entrevistas e testes psicológicos.",
    details: "Processo estruturado que permite compreender de forma aprofundada sintomas, dificuldades e necessidades específicas, recorrendo a entrevistas clínicas, observação e aplicação de testes psicológicos validados. Este processo integra diferentes fontes de informação para construir uma visão global do funcionamento emocional, cognitivo e comportamental da pessoa, contribuindo para a formulação de hipóteses diagnósticas e para a definição de estratégias de intervenção ajustadas.",
  },
  {
    icon: "/figmaAssets/icons/icon-apoio.svg",
    title: "Psicologia Clínica e Psicoterapia",
    description: "Espaço de compreensão e transformação, onde exploramos a sua história e os padrões que influenciam a forma como vive e se relaciona.",
    details: "É um lugar onde, em conjunto, procuramos compreender padrões, aprofundar o conhecimento da história e perceber de que forma esta influencia o presente, abrindo caminho a novas formas de estar e de se relacionar consigo e com os outros.",
  },
  {
    icon: "/figmaAssets/icons/icon-parental.svg",
    title: "Aconselhamento Psicológico Parental",
    description: "Espaço de apoio e orientação que ajuda a fortalecer competências parentais e a lidar com os desafios do dia a dia de forma consciente e ajustada.",
    details: "Pretende ser um espaço de reflexão, apoio e orientação face às dúvidas e desafios do dia a dia, onde em conjunto, são desenvolvidas estratégias específicas que visam fortalecer as competências parentais e apoiar o processo educativo de forma consciente, segura e ajustada.",
  },
  {
    icon: "/figmaAssets/icons/icon-psicopedagogico.svg",
    title: "Aconselhamento Psicológico Perinatal",
    description: "Espaço de apoio emocional para cuidar das transformações e desafios desde a pré-conceção ao pós-parto.",
    details: "Período de grande transformação, muitas vezes vivido com intensidade e acompanhado por desafios, dúvidas e emoções diversas. Desde a pré-conceção até ao pós-parto, incluindo situações de infertilidade, oferecemos um espaço de apoio onde é possível compreender, integrar e cuidar das experiências vividas ao longo deste percurso.",
  },
  {
    icon: "/figmaAssets/icons/icon-consultadoria.svg",
    title: "Consultadoria",
    description: "Colaboração com famílias, escolas e instituições para prevenir e resolver dificuldades relacionais, emocionais ou organizacionais.",
    details: "Serviço de colaboração com famílias, escolas e outras instituições, com o objetivo de prevenir e intervir em dificuldades de natureza relacional, emocional ou organizacional. Através de uma abordagem personalizada, são analisadas necessidades específicas de cada contexto, promovendo estratégias práticas e eficazes que favorecem o bem-estar, a comunicação e o funcionamento saudável dos diferentes sistemas. Este acompanhamento pode incluir orientação, formação e apoio na tomada de decisão, contribuindo para soluções sustentadas e ajustadas a cada realidade.",
  },
  {
    icon: "/figmaAssets/icons/icon-workshops.svg",
    title: "Workshops e Formações",
    description: "Formações práticas em temas como gestão de stress, orientação vocacional e habilidades de estudo, dirigidas a jovens e adultos.",
    details: "Sessões formativas de caráter prático e dinâmico, centradas em temas como gestão de stress, orientação vocacional, desenvolvimento pessoal e estratégias de estudo. Dirigidas a jovens e adultos, estas formações visam promover competências essenciais para o bem-estar emocional, o desempenho académico e a adaptação a diferentes desafios do dia a dia. Através de metodologias participativas e baseadas na evidência, os participantes são incentivados a refletir, experimentar e aplicar ferramentas úteis no seu quotidiano, potenciando mudanças consistentes e sustentadas.",
  },
];

type Service = (typeof services)[0];

const ServiceModal = ({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 bg-[#fdf8f5] rounded-[20px] max-w-lg w-full p-8 md:p-10 shadow-2xl">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#502f27] hover:text-[#B84C32] transition-colors"
          aria-label="Fechar"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="w-12 h-12 bg-[#C79DCE] rounded-[14px] flex items-center justify-center mb-5">
          <img src={service.icon} alt="" className="w-5 h-5" aria-hidden="true" />
        </div>
        <h2
          id="modal-title"
          className="[font-family:'Old_Standard_TT',Helvetica] font-normal text-[#B84C32] text-2xl leading-snug mb-4"
        >
          {service.title}
        </h2>
        <p className="[font-family:'Literata',Helvetica] font-normal text-[#502f27] text-sm leading-relaxed">
          {service.details}
        </p>
      </div>
    </div>
  );
};

export const ConsultasPage = (): JSX.Element => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openModal = (service: Service, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
    triggerRef.current?.focus();
  };

  return (
    <>
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
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: "rgba(210, 140, 80, 0.25)", mixBlendMode: "multiply" }} 
              aria-hidden="true"
            />
          </div>
        </section>

        {/* Título "Consultas" */}
        <section className="w-full flex justify-center px-6 py-20">
          <div className="flex flex-col gap-4 items-center text-center max-w-[888px] w-full">
            <FadeUp as="h1" className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-3xl leading-tight">
              Consultas
            </FadeUp>
            <FadeUp as="p" className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[30px]" delay={0.12}>
              As consultas decorrem num espaço de tranquilidade, privacidade e segurança, pensado para que se sinta acolhido(a) e acompanhado(a) ao longo do seu processo terapêutico. Cada acompanhamento é adaptado às suas necessidades, respeitando o seu ritmo e promovendo um caminho de maior compreensão, equilíbrio e mudança.
            </FadeUp>
          </div>
        </section>

        {/* Modalidades */}
        <section className="relative w-full overflow-hidden bg-[#f0e2dd] py-16 md:py-20 px-6">
          <img
            src="/figmaAssets/efeitos-bg-consultas.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
          <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-12">
            <FadeUp className="flex flex-col gap-4 text-center items-center">
              <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-3xl leading-tight">
                Modalidades
              </h2>
              <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[30px] max-w-[600px]">
                Escolha a forma de acompanhamento que o faz sentir mais confortável e seguro.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeUp className="relative aspect-[585/414] rounded-[24px] overflow-hidden shadow-lg" delay={0.1}>
                <img src="/images/presencial.jpg" alt="Consulta Presencial" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[rgba(184,76,50,0.8)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-10">
                  <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#fafafa] text-4xl md:text-4xl leading-tight">Presencial</h3>
                  <p className="[font-family:'Literata',Helvetica] font-normal text-[#fafafa] texto-sl leading-[30px] max-w-[290px]">No consultório, num espaço tranquilo e reservado.</p>
                </div>
              </FadeUp>
              <FadeUp className="relative aspect-[588/420] rounded-[24px] overflow-hidden shadow-lg" delay={0.2}>
                <img src="/images/online.jpg" alt="Consulta Online" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[rgba(206,136,144,0.8)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-10">
                  <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#fafafa] text-4xl md:text-4xl leading-tight">Online</h3>
                  <p className="[font-family:'Literata',Helvetica] font-normal text-[#fafafa] texto-sl leading-[30px] max-w-[331px]">Através de videochamada, com a mesma qualidade e confidencialidade.</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Horário */}
        <section className="w-full bg-bg-lara py-20 px-6">
          <div className="max-w-[1008px] mx-auto flex flex-col gap-10">
            <FadeUp className="flex flex-col gap-4 text-center">
              <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-3xl leading-tight">Horário</h2>
              <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[30px]">
                As sessões decorrem de{" "}
                <span className="font-bold">segunda a sexta-feira</span> entre as{" "}
                <span className="font-bold">09:00 – 19:00h.</span>
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px]">
              {horariosCards.map((card, i) => (
                <FadeUp key={card.title} className="bg-[rgba(188,88,125,0.3)] border border-[rgba(255,255,255,0.1)] rounded-[21px] flex flex-col gap-[14px] p-[22px]" delay={i * 0.1}>
                  <div className="flex items-center gap-[10.5px]">
                    <div className="bg-[#F5EBE5] rounded-[12px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                      <img src={card.icon} alt="" className="w-5 h-5" />
                    </div>
                    <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph text-[18px] leading-[21px]">{card.title}</p>
                  </div>
                  <ul className="flex flex-col gap-[7px]">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex gap-[7px] pl-[48px] items-start">
                        <span className="text-[#1e1e1e] text-[12.25px] leading-[19.9px] shrink-0">•</span>
                        <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph text-[14px] leading-[19.9px]">{item}</p>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              ))}
            </div>
            <FadeUp className="flex items-center gap-4 w-full pt-2" delay={0.3}>
              <div className="flex-1 h-px bg-[#502f27]/20" />
              <img src="/figmaAssets/icons/icon-flor.svg" alt="" className="w-5 h-5 opacity-50" />
              <div className="flex-1 h-px bg-[#502f27]/20" />
            </FadeUp>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="w-full bg-bg-lara px-6 pb-24">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-14">
            <FadeUp className="flex flex-col gap-[21px] text-center">
              <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle md:text-3xl leading-[42px]">Serviços</h2>
              <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph text-[14px] leading-[24.5px]">
                A relação terapêutica é o coração do nosso trabalho. Valorizamos a criação de um espaço seguro, acolhedor e livre de julgamentos, onde cada pessoa se possa sentir verdadeiramente escutada, compreendida e respeitada na sua singularidade. Acreditamos que o processo terapêutico é um caminho de colaboração, construído em conjunto, ao ritmo e de acordo com as necessidades de cada um, onde assumimos o compromisso de uma prática em constante atualização.
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
                  {service.details && (
                    <button
                      onClick={(e) => openModal(service, e.currentTarget)}
                      className="mt-1 text-[#893420] [font-family:'Literata',Helvetica] text-sm underline underline-offset-2 hover:text-[#B84C32] transition-colors"
                      aria-label={`Saber mais sobre ${service.title}`}
                    >
                      Saber mais
                    </button>
                  )}
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </>
  );
};
