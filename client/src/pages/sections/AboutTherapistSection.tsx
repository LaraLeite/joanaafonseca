export const AboutTherapistSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-6 py-12 md:py-20 relative text-center">
      <h2 className="relative w-fit [font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textotitle text-3xl md:text-4xl tracking-[0] leading-tight">
        Áreas de intervenção
      </h2>

      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-4 md:mt-2">
        <p className="relative w-fit [font-family:'Literata',Helvetica] font-normal italic text-[#a47469] text-lg md:text-[22px] tracking-[0.44px] leading-normal">
          Clínica presencial e digital
        </p>
      </div>
    </section>
  );
};
