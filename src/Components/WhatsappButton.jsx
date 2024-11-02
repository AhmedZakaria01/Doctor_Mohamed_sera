import { t } from "i18next";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const WhatsappButton = ({ size, button, text }) => (
  <ReactWhatsapp
    className={`text-green-500 ${size} hover:text-green-400`}
    number="+20 1095521277"
    message="Hello, is there anyone available to chat with!"
  >
    {button ? (
      <button
        type="button"
        className="text-white  bg-gradient-to-r from-cyan-900 to-blue-900 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700 px-5 py-2 border-none rounded-md mt-2 transition duration-500   hover:shadow-lg "
      >
        <Link>{t(text)}</Link>
      </button>
    ) : (
      <i className="fab fa-whatsapp"></i>
    )}
  </ReactWhatsapp>
);

export default WhatsappButton;

WhatsappButton.propTypes = {
  size: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
};
