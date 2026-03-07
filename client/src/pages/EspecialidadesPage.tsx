import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const specialtyItems = [
  {
    title: "Perturbações de ansiedade",
    description: "Quando o medo e a preocupação se tornam constantes e limitam a vida quotidiana.",
    image: "/figmaAssets/frame-5-2.svg",
    href: "/especialidades/ansiedade"
  },
  {
    title: "Perturbações de humor",
    description: "Tristeza profunda, perda de energia ou euforia excessiva que afetam o dia a dia.",
    image: "/figmaAssets/frame-5-3.svg",
    href: "/especialidades/humor"
  },
  {
    title: "Intervenção em crise",
    description: "Apoio psicológico imediato em situações de choque, perda, violência, doença ou acontecimentos traumáticos.",
    image: "/figmaAssets/frame-5.svg",
    href: "/especialidades/crise"
  },
  {
    title: "Regulação emocional",
    description: "Aprender a reconhecer, aceitar e gerir emoções de forma saudável.",
    image: "/figmaAssets/frame-5-5.svg",
    href: "/especialidades/regulacao-emocional"
  },
  {
    title: "Adaptação à mudança e fases do ciclo de vida",
    description: "Apoio em fases desafiantes da vida, como adolescência, parentalidade, divórcio ou luto.",
    image: "/figmaAssets/frame-5-1.svg",
    href: "/especialidades/mudanca-vida"
  },
  {
    title: "Gestão de stress",
    description: "Ferramentas práticas para lidar com a pressão, prevenir o burnout e recuperar qualidade de vida.",
    image: "/figmaAssets/frame-5-4.svg",
    href: "/especialidades/stress"
  },
];

export const EspecialidadesPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />

      {/* Header Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20 text-center flex flex-col gap-6">
        <h1 className="[font-family:'Old_Standard_TT',Helvetica] italic text-textotitle text-4xl md:text-5xl tracking-tight">
          Especialidades
        </h1>
        <p className="[font-family:'Literata',Helvetica] text-textoparagraph text-sl md:text-xl max-w-2xl mx-auto leading-relaxed opacity-80">
          Compreenda e cuide as perturbações mais comuns que afetam o bem-estar psicológico.
        </p>
      </section>

      {/* Specialties Grid */}
      <section className="w-full max-w-[1200px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {specialtyItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <Link href={item.href} onClick={() => window.scrollTo(0, 0)}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-4">
                <h2 className="[font-family:'Old_Standard_TT',Helvetica] italic text-textotitle text-2xl md:text-3xl leading-tight">
                  {item.title}
                </h2>
                <p className="[font-family:'Literata',Helvetica] text-textoparagraph text-base leading-relaxed opacity-90">
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
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};
