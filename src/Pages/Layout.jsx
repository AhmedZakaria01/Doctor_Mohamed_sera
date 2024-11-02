import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { PropTypes } from "prop-types";

const Layout = ({ direction, setDirection }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar direction={direction} setDirection={setDirection} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  direction: PropTypes.string,
  setDirection: PropTypes.func,
};
