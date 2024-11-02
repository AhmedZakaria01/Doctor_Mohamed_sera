import { t } from "i18next";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ text, to }) {
  return (
    <button
      type="button"
      className="text-white  bg-gradient-to-r from-cyan-900 to-blue-900 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700 px-5 py-2 border-none rounded-md mt-2 transition duration-500   hover:shadow-lg "
    >
      <Link to={to}>{t(text)}</Link>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
