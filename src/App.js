import ApplyNow from "./components/ApplyNow";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TalentChoose from "./components/TaleNTChoose";
import TeamValues from "./components/TeamValues";

export default function App() {
  return (
    <h1 className="">

      <Navbar />
      <HeroSection />
      <TeamValues />
      <TalentChoose />
      <ApplyNow />
      <Footer />
    </h1>
  )
}