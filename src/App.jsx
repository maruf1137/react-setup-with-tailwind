import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import About from "./component/pages/about";
import Home from "./component/pages/home";
import Contact from "./component/pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Home />
      <About />
      <Contact /> */}
    </>
  );
}

export default App;
