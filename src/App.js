import "../src/assets/scss/css/styles.min.css";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Tokenomics from "./components/Tokenomics";
import { Roadmap } from "./components/Roadmap";
import { Faq } from "./components/Faq";
import HowItWorks from "./components/HowItWorks";
import { DarkModeProvider } from "./components/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Navbar />
        <Header />
        <Features />
        <HowItWorks />
        <Cta />
        <Tokenomics />
        <Roadmap />
        <Faq />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
