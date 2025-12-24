import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import MegaNavbar from "../components/layout/MegaNavbar";
import Footer from "../components/layout/Footer";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <div className="">
      <Navbar />
      <MegaNavbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default AppRoutes;
