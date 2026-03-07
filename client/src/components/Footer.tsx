import { Link } from "wouter";

export const Footer = () => {
  return (
    <>
      <img
        src="/figmaAssets/onda-footer.svg"
        alt=""
        className="w-full block"
        style={{ display: "block", marginBottom: "-2px" }}
      />

      <footer className="w-full bg-[#F0E2DD] px-8 pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr_1.6fr] gap-10 pb-12 border-b border-[rgba(196,113,90,0.2)]">

            {/* Brand column */}
            <div className="flex flex-col items-start gap-3">
              <Link href="/">
                <img
                  src="/figmaAssets/logo.svg"
                  alt="Joana Afonseca"
                  className="h-24 w-auto cursor-pointer"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </Link>
              <p className="text-[#502f27] text-[14px] leading-relaxed [font-family:'Literata',serif]">
                Psicóloga Clínica e da Saúde<br />
                OPP Nº 21653
              </p>
              <div className="flex gap-3 mt-1">
                <a
                  href="https://www.instagram.com/joanaafonseca.psicologia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 bg-[rgba(184,76,50,0.1)] rounded-full flex items-center justify-center hover:bg-[#B84C32] transition-colors group"
                >
                  <img src="/figmaAssets/icons/icon-instagram.svg" alt="Instagram" className="w-5 h-5 group-hover:brightness-0 group-hover:invert" />
                </a>
                <a
                  href="https://www.facebook.com/JoanaAfonsecaPsicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 bg-[rgba(184,76,50,0.1)] rounded-full flex items-center justify-center hover:bg-[#B84C32] transition-colors group"
                >
                  <img src="/figmaAssets/icons/icon-facebook.svg" alt="Facebook" className="w-5 h-5 group-hover:brightness-0 group-hover:invert" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 bg-[rgba(184,76,50,0.1)] rounded-full flex items-center justify-center hover:bg-[#B84C32] transition-colors group"
                >
                  <img src="/figmaAssets/icons/icon-linkedin.svg" alt="LinkedIn" className="w-5 h-5 group-hover:brightness-0 group-hover:invert" />
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex flex-col gap-5 md:pt-[110px]">
              <p className="text-[#B84C32] [font-family:'Old_Standard_TT',serif] text-[16px] leading-tight">
                Navegação
              </p>
              <ul className="flex flex-col gap-1 [font-family:'Literata',serif]">
                <li><Link href="/espaco" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Espaço</Link></li>
                <li><Link href="/sobre" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Sobre Mim</Link></li>
                <li><Link href="/especialidades" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Especialidades</Link></li>
                <li><Link href="/consultas" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Consultas</Link></li>
              </ul>
            </div>

            {/* Serviços */}
            <div className="flex flex-col gap-5 md:pt-[110px]">
              <p className="text-[#B84C32] [font-family:'Old_Standard_TT',serif] text-[16px] leading-tight">
                Serviços
              </p>
              <ul className="flex flex-col gap-1 [font-family:'Literata',serif]">
                <li><Link href="/consultas" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Avaliação Psicológica</Link></li>
                <li><Link href="/consultas" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Apoio Psicoterapêutico</Link></li>
                <li><Link href="/consultas" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Aconselhamento Parental</Link></li>
                <li><Link href="/consultas" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Apoio Psicopedagógico</Link></li>
                <li><Link href="/consultas" className="text-[#1E1E1E] text-[14px] hover:text-[#B84C32] transition-colors">Workshops e Formações</Link></li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-5 md:pt-[110px]">
              <p className="text-[#B84C32] [font-family:'Old_Standard_TT',serif] text-[16px] leading-tight">
                Contacto
              </p>
              <div className="flex flex-col gap-3 [font-family:'Literata',serif]">
                <div className="flex items-start gap-2">
                  <img src="/figmaAssets/icons/icon-email.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a href="mailto:afonseca.joana@gmail.com" className="text-[#502f27] text-[14px] leading-relaxed hover:text-[#B84C32] transition-colors">
                    afonseca.joana@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <img src="/figmaAssets/icons/icon-telefone.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a href="tel:+351912665445" className="text-[#502f27] text-[14px] leading-relaxed hover:text-[#B84C32] transition-colors">
                    +351 <strong>912 665 445</strong>
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <img src="/figmaAssets/icons/icon-morada.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-[#502f27] text-[14px] leading-relaxed">
                    Rua Visconde Anadia, nº19, Ed. Anadia,<br />
                    6º Andar, Sala AF · 9050-020 Funchal
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-7">
            <div className="flex items-center gap-4">
              <img
                src="/figmaAssets/ordem-psicologos.png"
                alt="Ordem dos Psicólogos"
                className="h-11 w-auto opacity-85 hover:opacity-100 transition-opacity"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <img
                src="/figmaAssets/livro-reclamacoes.png"
                alt="Livro de Reclamações"
                className="h-11 w-auto opacity-85 hover:opacity-100 transition-opacity"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <div className="flex items-center gap-2 text-[0.8rem] text-[#A47569] [font-family:'Literata',serif]">
              <Link href="/termos" className="underline hover:text-[#B84C32] transition-colors">Termos</Link>
              <span>·</span>
              <Link href="/politica" className="underline hover:text-[#B84C32] transition-colors">Política</Link>
              <span>·</span>
              <span>Copyright © 2025 · joanaafonseca</span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
