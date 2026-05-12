import { FadeUp } from "@/components/FadeUp";

export const WelcomeTextSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:py-20">
      <FadeUp className="flex max-w-[960px] w-full flex-col items-center text-center gap-6">
        <h1 className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-[#893420] text-2xl md:text-3xl tracking-tight leading-tight">
          Bem-vindo(a)
        </h1>
        <p className="texto-lg [font-family:'Literata',Helvetica] font-normal text-[#502f27]">
          Este é um espaço onde pode desacelerar, respirar e simplesmente ser. Um
          lugar de escuta e cuidado, pensado para o(a) acompanhar no{" "}
          <strong>caminho de reencontro consigo mesmo(a)</strong>, para que possa
          abrir espaço a novas possibilidades,{" "}
          <strong>maior equilíbrio e uma vida mais leve e plena</strong>.
        </p>
      </FadeUp>
    </section>
  );
};
