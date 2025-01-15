import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
// import About from "./component/pages/about";
import Home from "./pages/home";
// import Contact from "./component/pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-custom-bg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
