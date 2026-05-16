import { MainNavigationSection } from "./sections/MainNavigationSection";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/FadeUp";

export const SobrePage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center min-h-screen bg-bg-lara">
      <MainNavigationSection />
      
      {/* Hero Section */}
      <section className="w-full max-w-[1446px] mx-auto px-6 mb-12">
        <div className="relative w-full aspect-[16/9] md:aspect-[1446/584] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl">
          <img 
            src="/images/sobre-mim.jpg" 
            alt="Joana Afonseca" 
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
          <img
            src="/figmaAssets/overly-sobre.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-end p-8 md:p-20">
            <blockquote className="max-w-sm text-center">
               <p className="[font-family:'Literata',Helvetica] italic text-white text-xl md:text-2xl leading-relaxed">
                "Os únicos limites da vida são aqueles que estabelecemos."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-20 text-center flex flex-col gap-8">
        <FadeUp as="header" className="flex flex-col gap-4">
          <h1 className="[font-family:'Old_Standard_TT',Helvetica] italic text-textotitle text-3xl md:text-3xl">
            Sobre mim
          </h1>
          <p className="texto-sl [font-family:'Literata',Helvetica] text-textoparagraph">
            O meu nome é <span className="font-bold">Joana Afonseca</span>, <span className="italic">Psicóloga Clínica e da Saúde</span> e membro efetivo da Ordem dos Psicólogos Portugueses, <span className="font-medium">cédula profissional n.º 21653.</span>
          </p>
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-[#502f27]/20" />
            <img src="/figmaAssets/icons/icon-flor.svg" alt="" className="w-5 h-5 opacity-50" />
            <div className="flex-1 h-px bg-[#502f27]/20" />
          </div>
        </FadeUp>

        <div className="texto-sl flex flex-col gap-6 [font-family:'Literata',Helvetica] text-textoparagraph text-left">
          <FadeUp as="p" delay={0.1}>
            Sou uma profissional com um perfil integrativo, onde procuro adequar modelos teóricos e ferramentas de trabalho, no sentido de desenvolver uma intervenção adaptada à individualidade de cada pessoa e dos seus objetivos face à mudança.
          </FadeUp>
          <FadeUp as="p" delay={0.2}>
            Reconheço em mim uma paixão profunda pelo que faço. Abraço a responsabilidade da minha área com dedicação e profissionalismo. Estabeleço com cada pessoa uma ligação única. Um espaço onde posso contribuir para a sua transformação e para o seu caminho de mudança. Trabalho com empenho diário e aposto na aprendizagem contínua e no desenvolvimento pessoal e profissional. Isto permite-me responder de forma eficaz aos objetivos e desafios que me são confiados.
          </FadeUp>
          <FadeUp as="p" delay={0.3}>
            O meu percurso profissional tem sido desenvolvido em contextos privados e institucionais com crianças, adolescentes e adultos. As áreas de intervenção incluem a avaliação psicológica, o acompanhamento psicológico, o aconselhamento parental, o apoio psicopedagógico, assim como na promoção da saúde.
          </FadeUp>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative w-full bg-[#AB8B9A] py-20 px-6 overflow-hidden">
        <img
          src="/figmaAssets/efeitos-sobremim-banner.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <FadeUp as="h2" className="[font-family:'Old_Standard_TT',Helvetica] italic text-white text-3xl md:text-4xl leading-tight">
              Percurso académico e profissional
            </FadeUp>
            <FadeUp as="p" className="texto-sl [font-family:'Literata',Helvetica] font-bold text-white" delay={0.1}>
              Mais do que uma profissão, a Psicologia é para mim uma paixão e uma missão:
            </FadeUp>
            <ul className="texto-sl flex flex-col gap-4 [font-family:'Literata',Helvetica] text-white">
              <FadeUp as="li" className="flex gap-3 items-start" delay={0.2}>
                <img src="/figmaAssets/icons/plant.png" alt="" className="w-5 h-5 mt-1 shrink-0" />
                <span>Ajudar cada pessoa a reencontrar equilíbrio</span>
              </FadeUp>
              <FadeUp as="li" className="flex gap-3 items-start" delay={0.3}>
                <img src="/figmaAssets/icons/plant.png" alt="" className="w-5 h-5 mt-1 shrink-0" />
                <span>A desenvolver recursos internos</span>
              </FadeUp>
              <FadeUp as="li" className="flex gap-3 items-start" delay={0.4}>
                <img src="/figmaAssets/icons/plant.png" alt="" className="w-5 h-5 mt-1 shrink-0" />
                <span>A crescer com as mudanças da vida</span>
              </FadeUp>
            </ul>
          </div>
          <FadeUp className="aspect-square rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl" delay={0.2}>
            <img 
              src="/images/joana-foto.jpg" 
              alt="Percurso Profissional" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </FadeUp>
        </div>
      </section>

      {/* Timeline / Qualifications */}
      <section className="relative w-full overflow-hidden px-6 py-20">
        <img
          src="/figmaAssets/florbg-sobremim.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-6 [font-family:'Literata',Helvetica] text-textoparagraph text-sm md:text-base opacity-80">
            <FadeUp as="p">Sou <span className="font-bold">membro efetivo da OPP Nº 21653</span> e, enquanto psicóloga credenciada, assumo a formação contínua como uma responsabilidade de todos os profissionais que procuram prestar um serviço de qualidade.</FadeUp>
            <FadeUp as="p" delay={0.1}>Tenho Especialização Avançada em Terapias Cognitivo-Comportamentais com Adultos e em Intervenção na Gravidez e Parentalidade, Terapia EMDR, Internal Family Systems (IFS) e em Intervenção em Crise.</FadeUp>
            <FadeUp as="p" delay={0.2}>Sou também formadora certificada na área da promoção de competências emocionais, profissionais e sociais, entre outras.</FadeUp>
          </div>

          <div className="flex flex-col gap-8">
            {[
              { year: "2025", items: ["Terapeuta IFS - Internal Family Systems - nível 1, Sociedade Portuguesa de Psicoterapias Construtivistas"] },
              { year: "2024", items: ["Psicoterapeuta pela Sociedade Portuguesa de Psicoterapias Construtivistas (em formação)", "Terapeuta EMDR, nível II, pela Associação Portuguesa de EMDR, Membro nº514", "Formação na Comunidade: Mentalizando - orientada pela Psiquiatra Perinatal Doutora Teresa Reis"] },
              { year: "2023", items: ["Especialização Avançada Pós-Universitária em Intervenção na Gravidez e na Parentalidade"] },
              { year: "2021", items: ["Especialização Avançada em Terapias Cognitivo-Comportamentais com Adultos"] },
              { year: "2020", items: ["Especialização Avançada em Intervenção em Crise e em Múltiplos Contextos"] },
              { year: "2015", items: ["Mestrado em Psicologia Clínica e da Saúde pela Universidade Portucalense Infante D. Henrique (Porto)"] },
              { year: "2012", items: ["Certificado de Competências Pedagógicas - CCP n.º F597040/2012", "Licenciatura em Psicologia pela Universidade Portucalense Infante D. Henrique (Porto)"] }
            ].map((entry, i, arr) => (
              <FadeUp key={i} as="div" className="relative flex flex-col gap-3 pb-3" delay={i * 0.1}>
                <div className="absolute left-[5px] top-[28px] bottom-[-22px] w-0 border-l border-dashed border-[#C79DCE]" />
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#C79DCE] flex-shrink-0 relative z-10" />
                  <span className="texto-lg [font-family:'Literata',Helvetica] font-bold text-textoparagraph">{entry.year}</span>
                </div>
                <div className="flex flex-col gap-1.5 pl-6">
                  {entry.items.map((text, j) => (
                    <FadeUp key={j} as="div" className="flex gap-3 items-start" delay={i * 0.1 + j * 0.08 + 0.06}>
                      <svg className="flex-shrink-0 mt-1" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.302 14.004C3.882 14.004 3.48 13.884 3.096 13.644C2.712 13.416 2.4 13.116 2.16 12.744C1.92 12.372 1.8 11.988 1.8 11.592C1.8 11.112 1.932 10.656 2.196 10.224C2.46 9.78 2.79 9.402 3.186 9.09C3.594 8.766 3.996 8.532 4.392 8.388C3.984 8.508 3.564 8.568 3.132 8.568C2.58 8.568 2.064 8.466 1.584 8.262C1.104 8.058 0.72 7.77 0.432 7.398C0.144 7.014 0 6.564 0 6.048C0 5.532 0.108 5.082 0.324 4.698C0.552 4.302 0.852 3.996 1.224 3.78C1.596 3.564 2.004 3.456 2.448 3.456C2.976 3.456 3.516 3.612 4.068 3.924C4.632 4.224 5.1 4.608 5.472 5.076C5.268 4.776 5.088 4.41 4.932 3.978C4.788 3.534 4.716 3.072 4.716 2.592C4.716 2.112 4.818 1.68 5.022 1.296C5.238 0.9 5.532 0.588 5.904 0.36C6.288 0.12 6.732 0 7.236 0C7.98 0 8.58 0.252 9.036 0.756C9.492 1.248 9.72 1.86 9.72 2.592C9.72 3.036 9.654 3.48 9.522 3.924C9.39 4.356 9.204 4.74 8.964 5.076L9.036 4.986C9.42 4.506 9.87 4.134 10.386 3.87C10.914 3.594 11.46 3.456 12.024 3.456C12.456 3.456 12.858 3.564 13.23 3.78C13.602 3.984 13.902 4.278 14.13 4.662C14.358 5.046 14.472 5.502 14.472 6.03C14.472 6.558 14.316 7.014 14.004 7.398C13.704 7.782 13.314 8.076 12.834 8.28C12.354 8.472 11.85 8.568 11.322 8.568C11.046 8.556 10.8 8.538 10.584 8.514C10.368 8.478 10.188 8.436 10.044 8.388C10.464 8.532 10.872 8.766 11.268 9.09C11.676 9.402 12.012 9.774 12.276 10.206C12.54 10.638 12.672 11.112 12.672 11.628C12.672 11.988 12.552 12.354 12.312 12.726C12.084 13.086 11.778 13.386 11.394 13.626C11.01 13.878 10.596 14.004 10.152 14.004C9.564 14.004 9.048 13.818 8.604 13.446C8.172 13.086 7.836 12.6 7.596 11.988C7.476 11.676 7.386 11.394 7.326 11.142C7.266 10.878 7.236 10.644 7.236 10.44C7.104 11.544 6.78 12.414 6.264 13.05C5.76 13.686 5.106 14.004 4.302 14.004ZM6.228 5.364L6.804 5.148C6.864 5.016 6.9 4.89 6.912 4.77C6.936 4.65 6.948 4.548 6.948 4.464C6.948 4.344 6.924 4.194 6.876 4.014C6.828 3.822 6.804 3.684 6.804 3.6C6.804 3.432 6.84 3.288 6.912 3.168C6.984 3.048 7.092 2.988 7.236 2.988C7.38 2.988 7.488 3.048 7.56 3.168C7.632 3.288 7.668 3.432 7.668 3.6C7.668 3.72 7.638 3.864 7.578 4.032C7.518 4.2 7.488 4.344 7.488 4.464C7.488 4.668 7.536 4.896 7.632 5.148L8.208 5.364C8.448 5.124 8.64 4.806 8.784 4.41C8.928 4.002 9 3.588 9 3.168C9 2.604 8.838 2.154 8.514 1.818C8.19 1.47 7.764 1.296 7.236 1.296C6.72 1.296 6.288 1.47 5.94 1.818C5.604 2.154 5.436 2.604 5.436 3.168C5.436 3.588 5.508 4.002 5.652 4.41C5.796 4.806 5.988 5.124 6.228 5.364ZM3.6 8.136C4.092 8.136 4.512 8.04 4.86 7.848V7.236C4.8 7.14 4.68 7.056 4.5 6.984C4.32 6.912 4.08 6.864 3.78 6.84C3.192 6.78 2.898 6.6 2.898 6.3C2.898 6.168 2.94 6.072 3.024 6.012C3.12 5.952 3.222 5.922 3.33 5.922C3.402 5.922 3.498 5.946 3.618 5.994C3.75 6.03 3.894 6.096 4.05 6.192C4.362 6.384 4.692 6.48 5.04 6.48H5.112L5.472 5.976C5.352 5.724 5.16 5.484 4.896 5.256C4.632 5.016 4.332 4.818 3.996 4.662C3.66 4.506 3.312 4.428 2.952 4.428C2.448 4.428 2.034 4.608 1.71 4.968C1.398 5.328 1.242 5.76 1.242 6.264C1.242 6.804 1.458 7.254 1.89 7.614C2.334 7.962 2.904 8.136 3.6 8.136ZM10.854 8.136C11.562 8.136 12.132 7.962 12.564 7.614C13.008 7.254 13.23 6.804 13.23 6.264C13.23 5.736 13.062 5.298 12.726 4.95C12.402 4.602 11.994 4.428 11.502 4.428C11.142 4.428 10.788 4.506 10.44 4.662C10.092 4.818 9.786 5.016 9.522 5.256C9.27 5.496 9.084 5.736 8.964 5.976L9.36 6.48H9.432L9.576 6.462C9.72 6.438 9.864 6.408 10.008 6.372C10.152 6.336 10.296 6.276 10.44 6.192C10.728 6.012 10.95 5.922 11.106 5.922C11.394 5.922 11.538 6.054 11.538 6.318C11.538 6.618 11.304 6.78 10.836 6.804C10.356 6.828 9.948 6.972 9.612 7.236L9.576 7.848C9.924 8.04 10.35 8.136 10.854 8.136ZM4.59 12.852C4.998 12.852 5.358 12.702 5.67 12.402C5.994 12.102 6.246 11.742 6.426 11.322C6.618 10.89 6.714 10.488 6.714 10.116V9.936L6.696 9.792L6.12 9.612C5.7 9.864 5.436 10.194 5.328 10.602C5.22 11.01 5.022 11.214 4.734 11.214C4.626 11.214 4.53 11.172 4.446 11.088C4.374 10.992 4.338 10.896 4.338 10.8C4.338 10.56 4.494 10.332 4.806 10.116C5.118 9.9 5.328 9.576 5.436 9.144L5.112 8.64C4.8 8.7 4.458 8.844 4.086 9.072C3.714 9.3 3.396 9.588 3.132 9.936C2.88 10.284 2.754 10.668 2.754 11.088C2.754 11.4 2.844 11.694 3.024 11.97C3.204 12.234 3.432 12.45 3.708 12.618C3.996 12.774 4.29 12.852 4.59 12.852ZM9.774 12.852C10.086 12.852 10.38 12.768 10.656 12.6C10.944 12.432 11.172 12.216 11.34 11.952C11.52 11.676 11.61 11.388 11.61 11.088C11.61 10.668 11.478 10.29 11.214 9.954C10.962 9.606 10.65 9.318 10.278 9.09C9.918 8.862 9.576 8.712 9.252 8.64L8.928 9.144C8.976 9.348 9.048 9.528 9.144 9.684C9.252 9.84 9.384 9.984 9.54 10.116C9.852 10.368 10.008 10.608 10.008 10.836C10.008 10.932 9.966 11.022 9.882 11.106C9.81 11.178 9.726 11.214 9.63 11.214C9.366 11.214 9.162 11.01 9.018 10.602C8.886 10.23 8.628 9.9 8.244 9.612L7.668 9.792L7.65 9.936V10.116C7.65 10.332 7.692 10.59 7.776 10.89C7.872 11.178 7.998 11.466 8.154 11.754C8.322 12.03 8.514 12.258 8.73 12.438C9.066 12.714 9.414 12.852 9.774 12.852Z" fill="#C79DCE"/>
                      </svg>
                      <span className="texto-sl [font-family:'Literata',Helvetica] text-textoparagraph">{text}</span>
                    </FadeUp>
                  ))}
                </div>
                <div className="ml-6 border-b border-[#E9DAD6]" />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
