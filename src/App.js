import "./App.css";
import "aos/dist/aos.css";
import Footer from "./global/Footer";
import Header from "./global/Header";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Faq from "./components/OherPages/Faq";
import Career from "./components/OherPages/Career";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/career" element={<Career />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
