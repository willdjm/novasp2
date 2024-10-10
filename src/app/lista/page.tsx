import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollTop } from "../components/ScrollToTopp";
import { Whatsapp } from "../components/Whatsapp";
import { ListOfVentures } from "./components/ListOfVentures";
import { ListOfVenturesPartners } from "./components/ListOfVenturesPartners";

export default function Home() {
  return (
    <main>
      <Navbar isHome={false} />
      <ListOfVentures />
      <ListOfVenturesPartners />
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </main>
  );
}
