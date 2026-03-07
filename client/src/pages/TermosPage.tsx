import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";

export const TermosPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />

      <section className="w-full max-w-[860px] mx-auto px-6 py-16 md:py-20 flex flex-col gap-10">
        <FadeUp className="flex flex-col gap-4 text-center">
          <h1 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-4xl md:text-5xl leading-tight">
            Termos e Condições
          </h1>
          <p className="[font-family:'Literata',Helvetica] text-textoparagraph texto-sl opacity-70">
            Última atualização: março de 2026
          </p>
        </FadeUp>

        {[
          {
            title: "1. Aceitação dos Termos",
            text: "Ao aceder e utilizar este website, o utilizador aceita e concorda com os presentes Termos e Condições de utilização. Caso não concorde com alguma das condições aqui estabelecidas, deverá abster-se de utilizar este website."
          },
          {
            title: "2. Serviços Prestados",
            text: "Este website destina-se a fornecer informação sobre os serviços de psicologia clínica e da saúde prestados por Joana Afonseca, Psicóloga Clínica, membro efetivo da Ordem dos Psicólogos Portugueses com cédula profissional n.º 21053. A informação disponibilizada tem caráter meramente informativo e não substitui uma consulta ou acompanhamento psicológico."
          },
          {
            title: "3. Propriedade Intelectual",
            text: "Todo o conteúdo presente neste website, incluindo textos, imagens, logótipos e elementos gráficos, é propriedade de Joana Afonseca ou utilizado com a devida autorização. É proibida a reprodução, distribuição ou utilização dos conteúdos sem autorização prévia e escrita."
          },
          {
            title: "4. Limitação de Responsabilidade",
            text: "A informação disponibilizada neste website tem fins exclusivamente informativos. Joana Afonseca não se responsabiliza por quaisquer danos ou prejuízos resultantes da utilização das informações aqui disponibilizadas. Para aconselhamento personalizado, o utilizador deverá agendar uma consulta."
          },
          {
            title: "5. Marcação de Consultas",
            text: "A marcação de consultas através deste website ou por contacto direto está sujeita à disponibilidade da profissional. A confirmação da consulta será realizada mediante acordo entre ambas as partes. O cancelamento deverá ser comunicado com pelo menos 24 horas de antecedência."
          },
          {
            title: "6. Confidencialidade",
            text: "Toda a informação partilhada no contexto de consultas psicológicas é estritamente confidencial, nos termos do Código Deontológico da Ordem dos Psicólogos Portugueses e da legislação aplicável."
          },
          {
            title: "7. Alterações aos Termos",
            text: "Joana Afonseca reserva-se o direito de alterar os presentes Termos e Condições a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a sua publicação neste website."
          },
          {
            title: "8. Contacto",
            text: "Para qualquer questão relacionada com os presentes Termos e Condições, poderá contactar através do email afonseca.joana@gmail.com ou do telefone +351 912 665 445."
          },
        ].map((section, i) => (
          <FadeUp key={i} className="flex flex-col gap-3" delay={i * 0.05}>
            <h2 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-xl md:text-2xl">
              {section.title}
            </h2>
            <p className="[font-family:'Literata',Helvetica] font-normal text-textoparagraph texto-sl leading-relaxed">
              {section.text}
            </p>
          </FadeUp>
        ))}
      </section>

      <Footer />
    </main>
  );
};
