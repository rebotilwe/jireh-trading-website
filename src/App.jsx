import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Transport from "./pages/Transport/Transport";
import AppPage from "./pages/AppPage/AppPage";
import Collaborate from "./pages/Collaborate/Collaborate";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
