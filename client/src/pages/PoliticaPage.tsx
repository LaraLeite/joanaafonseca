import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";

export const PoliticaPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />

      <section className="w-full max-w-[860px] mx-auto px-6 py-16 md:py-20 flex flex-col gap-10">
        <FadeUp className="flex flex-col gap-4 text-center">
          <h1 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-4xl md:text-4xl leading-tight">
            Política de Privacidade
          </h1>
          <p className="[font-family:'Literata',Helvetica] text-textoparagraph texto-sl opacity-70">
            Última atualização: março de 2026
          </p>
        </FadeUp>

        {[
          {
            title: "1. Responsável pelo Tratamento",
            text: "O responsável pelo tratamento dos dados pessoais recolhidos através deste website é Joana Afonseca, Psicóloga Clínica, com sede em Rua Visconde Anadia, nº19, Ed. Anadia, 6º Andar, Sala AF, 9050-020 Funchal. Contacto: afonseca.joana@gmail.com"
          },
          {
            title: "2. Dados Recolhidos",
            text: "Os dados pessoais recolhidos através deste website limitam-se aos fornecidos voluntariamente pelo utilizador no âmbito de pedidos de contacto ou marcação de consultas, nomeadamente: nome, endereço de email e número de telefone."
          },
          {
            title: "3. Finalidade do Tratamento",
            text: "Os dados recolhidos são utilizados exclusivamente para responder a pedidos de informação, gerir marcações de consultas e comunicar com os utilizadores no âmbito dos serviços prestados. Os dados não são partilhados com terceiros sem o consentimento do titular."
          },
          {
            title: "4. Base Legal",
            text: "O tratamento de dados pessoais é realizado com base no consentimento do titular, na execução de um contrato de prestação de serviços ou no cumprimento de obrigações legais, nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD)."
          },
          {
            title: "5. Conservação dos Dados",
            text: "Os dados pessoais são conservados pelo período estritamente necessário para as finalidades que motivaram a sua recolha, ou pelo período legalmente exigido. Findo esse período, os dados são eliminados de forma segura."
          },
          {
            title: "6. Direitos do Titular",
            text: "Nos termos do RGPD, o titular dos dados tem direito a aceder, retificar, apagar, limitar ou opor-se ao tratamento dos seus dados pessoais, bem como o direito à portabilidade. Para exercer estes direitos, deverá contactar através do email afonseca.joana@gmail.com."
          },
          {
            title: "7. Cookies",
            text: "Este website poderá utilizar cookies para melhorar a experiência de navegação. Os cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador. O utilizador pode configurar o seu browser para recusar cookies, podendo contudo algumas funcionalidades do website ficar limitadas."
          },
          {
            title: "8. Segurança",
            text: "São adotadas medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, perda, destruição ou divulgação acidental."
          },
          {
            title: "9. Alterações à Política",
            text: "A presente Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão publicadas nesta página. Recomendamos que consulte regularmente esta página para se manter informado."
          },
          {
            title: "10. Contacto",
            text: "Para qualquer questão relacionada com a proteção dos seus dados pessoais, poderá contactar através do email afonseca.joana@gmail.com ou do telefone +351 912 665 445."
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
