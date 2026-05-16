import { FadeUp } from "@/components/FadeUp";
import { useEffect, useRef, useState } from "react";

const servicesData = [
  {
    icon: "/figmaAssets/icons/icon-avaliacao.svg",
    title: "Avaliação Psicológica",
    description: "Processo estruturado que ajuda a compreender sintomas, dificuldades ou necessidades específicas, recorrendo a entrevistas e testes psicológicos.",
  },
  {
    icon: "/figmaAssets/icons/icon-apoio.svg",
    title: "Psicologia Clínica e Psicoterapia",
    description: "É um lugar onde, em conjunto, procuramos compreender padrões, aprofundar o conhecimento da história e perceber de que forma esta influencia o presente, abrindo caminho a novas formas de estar e de se relacionar consigo e com os outros.",
  },
  {
    icon: "/figmaAssets/icons/icon-parental.svg",
    title: "Aconselhamento Psicológico Parental",
    description: "Pretende ser um espaço de reflexão, apoio e orientação face às dúvidas e desafios do dia a dia, onde em conjunto, são desenvolvidas estratégias específicas que visam fortalecer as competências parentais e apoiar o processo educativo de forma consciente, segura e ajustada.",
  },
  {
    icon: "/figmaAssets/icons/icon-psicopedagogico.svg",
    title: "Aconselhamento Psicológico Perinatal",
    description: "A fase perinatal é um período de grande transformação, muitas vezes vivido com intensidade e acompanhado por desafios, dúvidas e emoções diversas. Desde a pré-conceção até ao pós-parto, incluindo situações de infertilidade, oferecemos um espaço de apoio onde é possível compreender, integrar e cuidar das experiências vividas ao longo deste percurso.",
  },
  {
    icon: "/figmaAssets/icons/icon-consultadoria.svg",
    title: "Consultadoria",
    description: "Colaboração com famílias, escolas e instituições para prevenir e resolver dificuldades relacionais, emocionais ou organizacionais.",
  },
  {
    icon: "/figmaAssets/icons/icon-workshops.svg",
    title: "Workshops e Formações",
    description: "Formações práticas em temas como gestão de stress, orientação vocacional e habilidades de estudo, dirigidas a jovens e adultos.",
  },
];

const TRUNCATE_LENGTH = 100;

type Service = (typeof servicesData)[0];

const ServiceModal = ({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Foco no botão fechar ao abrir
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Fechar com Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Bloquear scroll do body
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
      <div
        ref={modalRef}
        className="relative z-10 bg-[#fdf8f5] rounded-[20px] max-w-lg w-full p-8 md:p-10 shadow-2xl"
      >
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
          {service.description}
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
    // Devolve foco ao botão que abriu o modal
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
            {servicesData.map((service, index) => {
              const isTruncated = service.description.length > TRUNCATE_LENGTH;
              const preview = isTruncated
                ? service.description.slice(0, TRUNCATE_LENGTH).trimEnd() + "..."
                : service.description;

              return (
                <FadeUp key={index} delay={(index % 3) * 0.1} className="flex flex-col items-center gap-3 p-7 text-center">
                  <div className="w-12 h-12 bg-[#C79DCE] rounded-[14px] flex items-center justify-center mb-2 flex-shrink-0">
                    <img src={service.icon} alt="" className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal text-[#B84C32] text-[1.325rem] leading-snug">
                    {service.title}
                  </h3>
                  <p className="[font-family:'Literata',Helvetica] font-normal text-[#502f27] text-sm leading-relaxed">
                    {preview}
                  </p>
                  {isTruncated && (
                    <button
                      onClick={(e) => openModal(service, e.currentTarget)}
                      className="mt-1 text-[#893420] [font-family:'Literata',Helvetica] text-sm underline underline-offset-2 hover:text-[#B84C32] transition-colors"
                      aria-label={`Saber mais sobre ${service.title}`}
                    >
                      Saber mais
                    </button>
                  )}
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </>
  );
};
