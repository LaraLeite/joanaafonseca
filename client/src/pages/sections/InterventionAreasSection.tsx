import { Link } from "wouter";
import { FadeUp } from "@/components/FadeUp";

const interventionAreas = [
  {
    image: "/images/area-ansiedade.jpg",
    title: "Perturbações de ansiedade",
    description: "Quando o medo e a preocupação se tornam constantes e limitam a vida quotidiana.",
    slug: "ansiedade",
  },
  {
    image: "/images/area-perturbarcoes.jpg",
    title: "Perturbações de humor",
    description: "Tristeza profunda, perda de energia ou euforia excessiva que afetam o dia a dia.",
    slug: "humor",
  },
  {
    image: "/images/area-crise.jpg",
    title: "Intervenção em crise",
    description: "Apoio psicológico imediato em situações de choque, perda, violência, doença ou acontecimentos traumáticos.",
    slug: "crise",
  },
  {
    image: "/images/area-regulacao.jpg",
    title: "Regulação emocional",
    description: "Aprender a reconhecer, aceitar e gerir emoções de forma saudável.",
    slug: "regulacao-emocional",
  },
  {
    image: "/images/area-adaptacao.jpg",
    title: "Adaptação à mudança e fases do ciclo de vida",
    description: "Apoio em fases desafiantes da vida, como adolescência, parentalidade, divórcio ou luto.",
    slug: "mudanca-vida",
  },
  {
    image: "/images/area-stress.jpg",
    title: "Gestão de stress",
    description: "Ferramentas práticas para lidar com a pressão, prevenir o burnout e recuperar qualidade de vida.",
    slug: "stress",
  },
];

export const InterventionAreasSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center mb-12">
          <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#893420] text-3xl md:text-[clamp(1.8rem,3vw,3rem)] tracking-tight leading-tight mb-3">
            Áreas de intervenção
          </h2>
          <p className="[font-family:'Literata',Helvetica] font-normal italic text-[#A47569] text-lg md:text-[1.375rem]">
            Clínica presencial e digital
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {interventionAreas.map((area, index) => (
            <FadeUp key={index} delay={(index % 3) * 0.1} className="flex flex-col gap-4">
              <Link href={`/especialidades/${area.slug}`} onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full aspect-[457/306] object-cover object-top rounded-[14px] cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
              <h3 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#893420] text-2xl md:text-[26px] leading-[1.25]">
                {area.title}
              </h3>
              <p className="texto-sl [font-family:'Literata',Helvetica] font-normal text-[#502f27]">
                {area.description}
              </p>
              <Link
                href={`/especialidades/${area.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="btn-pill inline-block w-fit px-6 py-2.5 rounded-[50px] border border-[#C79DCE] [font-family:'Literata',Helvetica] font-medium text-[#893420] text-base hover:bg-[#B84C32] hover:text-white hover:border-[#B84C32] transition-all duration-200"
              >
                Saiba mais
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
