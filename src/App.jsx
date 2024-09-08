import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Job from "./pages/Job";
import Services from "./pages/Services";
import { ScrollToTop } from "./components/Extra";

function App() {
  return (
    <>
      <ScrollToTop />

      <main role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="Job" element={<Job />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
