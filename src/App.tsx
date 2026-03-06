import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { ElementJoanaafonsecaHome } from "@/pages/ElementJoanaafonsecaHome";
import { EspacoPage } from "@/pages/EspacoPage";
import { SobrePage } from "@/pages/SobrePage";
import { EspecialidadesPage } from "@/pages/EspecialidadesPage";
import { EspecialidadeDetailPage } from "@/pages/EspecialidadeDetailPage";
import { ConsultasPage } from "@/pages/ConsultasPage";
import { ContactoPage } from "@/pages/ContactoPage";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={ElementJoanaafonsecaHome} />
      <Route path="/espaco" component={EspacoPage} />
      <Route path="/sobre" component={SobrePage} />
      <Route path="/especialidades" component={EspecialidadesPage} />
      <Route path="/especialidades/:slug" component={EspecialidadeDetailPage} />
      <Route path="/consultas" component={ConsultasPage} />
      <Route path="/contacto" component={ContactoPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
