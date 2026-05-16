import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";

export const ContactoPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />

     {/* Hero Section */}
      <section className="w-full max-w-[1446px] mx-auto px-6 mb-12">
        <div className="relative w-full aspect-[16/9] md:aspect-[1446/584] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl">
          <img
            src="/images/contacto-hero.jpg"
            alt="Caneta sobre papel"
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
      
          {/* Filtro quente */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: "rgba(50,30,70,0.25)", mixBlendMode: "multiply" }}
            aria-hidden="true"
          />
      
          {/* Overlay escuro para legibilidade do texto */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
      
          {/* Texto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <FadeUp className="flex flex-col gap-4 items-center max-w-[953px] w-full">
              <h1 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-white text-2xl leading-tight">
                Morada & Contactos
              </h1>
              <p className="[font-family:'Literata',Helvetica] font-normal text-white/90 text-base leading-[30px]">
                Este é um espaço de escuta, respeito e confidencialidade, onde cada pessoa é acolhida ao seu ritmo. Estamos disponíveis para o(a)
                acolher e acompanhar ao longo do seu processo. Entre em contacto connosco para esclarecer dúvidas ou agendar uma consulta.
              </p>
            </FadeUp>
          </div>
        </div>
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

           <div className="flex flex-col gap-0.5">
             <img 
                src="/figmaAssets/icons/icon-horario-dark.svg" 
                alt="Horário"
                className="w-5 h-5 mx-auto"
             />
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-[26px]">
              Segunda a Sexta-feira: 09:00-19:00h
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
