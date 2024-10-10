import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollTop } from "../components/ScrollToTopp";
import { Whatsapp } from "../components/Whatsapp";
import { PageContact } from "./components/Contact";
import { Maps } from "./components/Maps";


export default function Contact() {
  return (
    <main>
      <Navbar isHome={false} />
      <PageContact />
      <Maps />
      <Footer />
      <Whatsapp />
      <ScrollTop />
    </main>
  );
}
