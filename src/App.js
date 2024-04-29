import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Comp/Navbar";
import { About } from "./Components/Pages/About";
import { Services } from "./Components/Pages/Services";
import { Projects } from "./Components/Pages/Projects";
import { Blog } from "./Components/Pages/Blog";
import { Contact } from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
