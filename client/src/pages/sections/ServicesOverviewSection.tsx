import { FadeUp } from "@/components/FadeUp";

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

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#F0E2DD] px-6 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
        <FadeUp className="flex flex-col items-center gap-4 text-center">
          <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#893420] text-3xl tracking-tight leading-tight">
            Serviços
          </h2>
          <p className="max-w-[800px] [font-family:'Literata',Helvetica] font-normal text-[#502f27] text-base md:text-[1.1rem] leading-relaxed">
           A relação terapêutica é o coração do nosso trabalho. Valorizamos a criação de um espaço seguro, acolhedor e livre de julgamentos, onde cada pessoa se possa sentir verdadeiramente escutada, compreendida e respeitada na sua singularidade. Acreditamos que o processo terapêutico é um caminho de colaboração, construído em conjunto, ao ritmo e de acordo com as necessidades de cada um, onde assumimos o compromisso de uma prática em constante atualização.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {servicesData.map((service, index) => (
            <FadeUp key={index} delay={(index % 3) * 0.1} className="flex flex-col items-center gap-3 p-7 text-center">
              <div className="w-12 h-12 bg-[#C79DCE] rounded-[14px] flex items-center justify-center mb-2 flex-shrink-0">
                <img src={service.icon} alt="" className="w-5 h-5" />
              </div>
              <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal text-[#B84C32] text-[1.325rem] leading-snug">
                {service.title}
              </h3>
              <p className="[font-family:'Literata',Helvetica] font-normal text-[#502f27] text-sm leading-relaxed">
                {service.description}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
