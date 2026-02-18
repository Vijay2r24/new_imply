import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Kitchen from "./pages/Kitchen";
import KitchenClassic from "./pages/KitchenClassic";
import KitchenEco from "./pages/KitchenEco";
import Wardrobe from "./pages/Wardrobe";
import WardrobeSlido from "./pages/WardrobeSlido";
import WardrobeFlipo from "./pages/WardrobeFlipo";
import Living from "./pages/Living";
import TvUnits from "./pages/TvUnits";
import Vanities from "./pages/Vanities";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import ChooseImly from "./pages/ChooseImly";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import ScrollToTop from "./components/layout/ScrollToTop";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/kitchen" element={<Kitchen />} />
          <Route path="/products/kitchen/classic" element={<KitchenClassic />} />
          <Route path="/products/kitchen/eco" element={<KitchenEco />} />
          <Route path="/products/wardrobe" element={<Wardrobe />} />
          <Route path="/products/wardrobe/slido" element={<WardrobeSlido />} />
          <Route path="/products/wardrobe/flipo" element={<WardrobeFlipo />} />
          <Route path="/products/living" element={<Living />} />
          <Route path="/products/tv-units" element={<TvUnits />} />
          <Route path="/products/vanities" element={<Vanities />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/choose-imly" element={<ChooseImly />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;