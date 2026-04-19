import { FadeUp } from "@/components/FadeUp";

const consultationCards = [
  {
    icon: "/figmaAssets/icons/icon-modalidades.svg",
    title: "Modalidades",
    items: [
      "Presencial – num espaço físico tranquilo e reservado",
      "Online – através de videochamada, com a mesma qualidade e confidencialidade",
    ],
  },
  {
    icon: "/figmaAssets/icons/icon-horario.svg",
    title: "Horário",
    items: ["Segunda a Sexta-feira", "Das 9h - 19h00h"],
  },
  {
    icon: "/figmaAssets/icons/icon-marcacao.svg",
    title: "Marcação",
    items: [
      "Todas as sessões são agendadas previamente",
      "Através do WhatsApp ou enviando e-mail para afonseca.joana@gmail.com",
    ],
  },
  {
    icon: "/figmaAssets/icons/icon-regularidade.svg",
    title: "Regularidade",
    items: ["Acompanhamento semanal ou quinzenal", "Ajustado às suas necessidades"],
  },
  {
    icon: "/figmaAssets/icons/icon-duracao.svg",
    title: "Duração",
    items: [
      "Cada sessão tem duração média de 50 minutos",
      "A primeira sessão pode ser mais longa",
    ],
  },
  {
    icon: "/figmaAssets/icons/icon-acompanhamento.svg",
    title: "Acompanhamento",
    items: ["Crianças", "Adolescentes e adultos"],
  },
];

export const ConsultationsInfoSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
        <FadeUp className="flex flex-col items-center gap-4 text-center">
          <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#893420] text-3xl md:text-[clamp(1.8rem,3vw,3rem)] tracking-tight leading-tight">
            Consultas
          </h2>
          <p className="max-w-[680px] [font-family:'Literata',Helvetica] font-normal text-[#502f27] text-base md:text-lg leading-relaxed">
            Todas as sessões decorrem num ambiente pensado para proporcionar tranquilidade, privacidade e segurança, onde poderá sentir-se verdadeiramente acolhido/a e livre para partilhar, 
            ao seu ritmo, aquilo que é importante para si. 
            <span class="block">Este é um espaço de confiança, construído com respeito e confidencialidade, 
            que convida à reflexão, ao autoconhecimento e ao cuidado pessoal.</span>
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {consultationCards.map((card, index) => (
            <FadeUp
              key={index}
              delay={(index % 3) * 0.1}
              className="bg-[rgba(188,88,125,0.3)] rounded-[14px] p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 bg-white/60 rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <img src={card.icon} alt="" className="w-5 h-5" />
                </div>
                <span className="[font-family:'Literata',Helvetica] font-medium text-[#502f27] text-[0.95rem]">
                  {card.title}
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#502f27] font-bold mt-0.5 flex-shrink-0">·</span>
                    <p className="[font-family:'Literata',Helvetica] font-normal text-[#502f27] text-sm leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
