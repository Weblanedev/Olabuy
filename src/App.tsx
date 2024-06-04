import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./homepage";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";
import Billing from "./billing";
import PrivacyPolicy from "./terms-and-privacy";
import ProductsPage from "./products-page";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/billing"
          element={<Billing />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/products"
          element={<ProductsPage/>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
