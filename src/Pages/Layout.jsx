// src/Layout.js
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { PropTypes } from "prop-types";
import ScrollToTop from "../Components/ScrollToTop";

const Layout = ({ direction, setDirection }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <ScrollToTop />

      <Navbar direction={direction} setDirection={setDirection} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  direction: PropTypes.string,
  setDirection: PropTypes.func,
};
