import GlobalBackground from "./components/GlobalBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import PortfolioGrid from "./components/PortfolioGrid";
import AboutFeatured from "./components/AboutFeatured";
import PartnerLogos from "./components/PartnerLogos";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <GlobalBackground />
      <Navbar />
      <Hero />
      <ServicesGrid />
      <PortfolioGrid />
      <AboutFeatured />
      <PartnerLogos />
      <Footer />
    </div>
  );
};

export default App;