import { ConsultationsInfoSection } from "./sections/ConsultationsInfoSection";
import { InterventionAreasSection } from "./sections/InterventionAreasSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { MainNavigationSection } from "./sections/MainNavigationSection";
import { QuoteBannerSection } from "./sections/QuoteBannerSection";
import { QuoteCallToActionSection } from "./sections/QuoteCallToActionSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { WelcomeTextSection } from "./sections/WelcomeTextSection";
import { Footer } from "@/components/Footer";

export const ElementJoanaafonsecaHome = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center overflow-hidden bg-bg-lara">
      <MainNavigationSection />
      <QuoteBannerSection />
      <WelcomeTextSection />
      <IntroductionSection />
      <InterventionAreasSection />
      <QuoteCallToActionSection />
      <ServicesOverviewSection />
      <ConsultationsInfoSection />
      <Footer />
    </main>
  );
};
