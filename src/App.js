import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topheader from "./components/Top_header.js";
import NavigationBar from "./components/NavigationBar.js";
import Home from "./pages/home/Home.js";
import Contact from "./pages/contact/Contact.js";
import Product from "./pages/product/Product.js";
import Services from "./pages/service/Services.js";
import Blog from "./pages/blog/Blog.js";
import About from "./pages/about/About.js";
import Footer from "./components/Footer.js";
import "animate.css";
import { ScrollToTop } from "react-router-scroll-to-top";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Topheader />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
