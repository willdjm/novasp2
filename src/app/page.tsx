import { Banner } from "./components/Banner";
import { Blog } from "./components/Blog";
import { OurVentures } from "./components/OurVentures";
import { Footer } from "./components/Footer";
import { OurPartners } from "./components/OurPartners";
import { PartnerProducts } from "./components/PartnerProducts";
import { ScrollTop } from "./components/ScrollToTopp";
import { SocialMedia } from "./components/SocialMedia";
import { About } from "./components/About";
import { Whatsapp } from "./components/Whatsapp";

export default function Home() {
  return (
    <main>
      <Banner />
      <OurVentures title="Nossos Empreendimentos" showNavigation={true} />
      <PartnerProducts />
      <About />
      <OurPartners />
      <Blog />
      <SocialMedia />
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </main>
  );
}
