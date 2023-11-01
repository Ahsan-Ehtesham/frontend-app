import "../src/assets/scss/css/styles.min.css";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import { Roadmap } from "./components/Roadmap";
import { Faq } from "./components/Faq";
// import OurApp from "./components/OurApp";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      {/* <OurApp/> */}
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
