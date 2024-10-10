import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollToTopp";
import { SeeAlso } from "../components/SeeAlso";
import { Whatsapp } from "../components/Whatsapp";
import { Contact } from "../components/Contact";
import { Differences } from "./components/Differences";
import { DescriptionOfTheEnterprise } from "./components/DescriptionOfTheEnterprise";
import { Plants } from "./components/Plants";
import { Gallery } from "./components/Gallery";
import { Ficha } from "./components/Ficha";
import { Banner } from "./components/Banner";
import { OurVentures } from "../components/OurVentures";
import { Navbar } from "../components/Navbar";
import { DivFlutuante } from "./components/DivFlutuante";

export default function Home() {
  return (
    <main>
      <Navbar isHome={false} />
      <DivFlutuante />
      <Banner />
      <Ficha />
      <Gallery />
      <Plants />
      <DescriptionOfTheEnterprise />
      <Differences />
      <Contact />
      <OurVentures title="Veja outros empreendimentos" showNavigation={false} /> <SeeAlso />
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </main>
  );
}
