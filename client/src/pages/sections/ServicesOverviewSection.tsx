import { FadeUp } from "@/components/FadeUp";
import { useEffect, useRef, useState } from "react";

const servicesData = [
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

type Service = (typeof servicesData)[0];

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
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 bg-[#fdf8f5] rounded-[20px] max-w-lg w-full p-8 md:p-10 shadow-2xl">
        {/* Botão fechar */}
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

        {/* Ícone */}
        <div className="w-12 h-12 bg-[#C79DCE] rounded-[14px] flex items-center justify-center mb-5">
          <img src={service.icon} alt="" className="w-5 h-5" aria-hidden="true" />
        </div>

        {/* Título */}
        <h2
          id="modal-title"
          className="[font-family:'Old_Standard_TT',Helvetica] font-normal text-[#B84C32] text-2xl leading-snug mb-4"
        >
          {service.title}
        </h2>

        {/* Descrição completa */}
        <p className="[font-family:'Literata',Helvetica] font-normal text-[#502f27] text-sm leading-relaxed">
          {service.details}
        </p>
      </div>
    </div>
  );
};

export const ServicesOverviewSection = (): JSX.Element => {
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
      <section className="w-full bg-[#F0E2DD] px-6 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          <FadeUp className="flex flex-col items-center gap-4 text-center">
            <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#893420] text-3xl tracking-tight leading-tight">
              Serviços
            </h2>
            <p className="max-w-[900px] [font-family:'Literata',Helvetica] font-normal text-[#502f27] text-sm leading-relaxed">
              A relação terapêutica é o coração do nosso trabalho. Valorizamos a criação de um espaço seguro, acolhedor e livre de julgamentos, onde cada pessoa se possa sentir verdadeiramente escutada, compreendida e respeitada na sua singularidade. Acreditamos que o processo terapêutico é um caminho de colaboração, construído em conjunto, ao ritmo e de acordo com as necessidades de cada um, onde assumimos o compromisso de uma prática em constante atualização.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {servicesData.map((service, index) => (
              <FadeUp key={index} delay={(index % 3) * 0.1} className="flex flex-col items-center gap-3 p-7 text-center">
                <div className="w-12 h-12 bg-[#C79DCE] rounded-[14px] flex items-center justify-center mb-2 flex-shrink-0">
                  <img src={service.icon} alt="" className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal text-[#B84C32] text-[1.325rem] leading-snug">
                  {service.title}
                </h3>
                <p className="[font-family:'Literata',Helvetica] font-normal text-[#502f27] text-sm leading-relaxed">
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

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </>
  );
};
