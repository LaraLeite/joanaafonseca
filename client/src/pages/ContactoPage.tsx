import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";

export const ContactoPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />

      {/* Título */}
      <section className="w-full flex justify-center px-6 py-16 md:py-20">
        <FadeUp className="flex flex-col gap-4 items-center text-center max-w-[953px] w-full">
          <h1 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-4xl md:text-5xl leading-tight">
            Contacto
          </h1>
          <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[30px]">
            Quer cuidar de si?
          </p>
        </FadeUp>
      </section>

      {/* Conteúdo centrado */}
      <section className="w-full flex justify-center px-6 pb-24">
        <FadeUp className="flex flex-col gap-5 text-center max-w-[496px] w-full" delay={0.1}>

          <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-[28px] leading-tight">
            Onde nos encontra
          </h2>

          <div className="flex flex-col gap-0.5">
            <p className="[font-family:'Literata',Helvetica] font-semibold text-textoparagraph texto-sl">
              Presencial:
            </p>
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[26px]">
              Rua Visconde Anadia, nº19, Ed. Anadia, 6º Andar, Sala AF
            </p>
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[26px]">
              9050-020 Funchal
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="[font-family:'Literata',Helvetica] font-semibold text-textoparagraph texto-sl">
              Digital:
            </p>
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[26px]">
              Atendimento somente com marcação prévia.
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href="mailto:afonseca.joana@gmail.com"
              className="[font-family:'Literata',Helvetica] text-textoparagraph texto-sl hover:text-[#B84C32] transition-colors"
            >
              🌐 afonseca.joana@gmail.com
            </a>
            <a
              href="https://www.facebook.com/JoanaAfonsecaPsicologia"
              target="_blank"
              rel="noopener noreferrer"
              className="[font-family:'Literata',Helvetica] text-textoparagraph texto-sl hover:text-[#B84C32] transition-colors underline break-all"
            >
              📘 https://www.facebook.com/JoanaAfonsecaPsicologia
            </a>
            <a
              href="https://www.instagram.com/joanaafonseca.psicologia/"
              target="_blank"
              rel="noopener noreferrer"
              className="[font-family:'Literata',Helvetica] text-textoparagraph texto-sl hover:text-[#B84C32] transition-colors underline break-all"
            >
              📷 https://www.instagram.com/joanaafonseca.psicologia/
            </a>
            <p className="[font-family:'Literata',Helvetica] text-textoparagraph texto-sl">
              Email: afonseca.joana@gmail.com
            </p>
            <p className="[font-family:'Literata',Helvetica] text-textoparagraph texto-sl">
              Telefone: + 351 912 665 445
            </p>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </main>
  );
};
