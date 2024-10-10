import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { OurVentures } from "../components/OurVentures";
import { ScrollTop } from "../components/ScrollToTopp";
import { Whatsapp } from "../components/Whatsapp";
import { Contact } from "../components/Contact";
import { SeeAlso } from "../components/SeeAlso";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { WeBelieve } from "./components/WeBelieve";
import { WeBuildDreams } from "./components/WeBuildDreams";



export default function Home() {
  return (
    <main>
      <Navbar isHome={false} />
      <Banner />
      <About />
      <WeBuildDreams />
      <WeBelieve />
      <Contact />
      <OurVentures title="Veja outros empreendimentos" showNavigation={false} />
      <SeeAlso />
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </main>
  );
}
