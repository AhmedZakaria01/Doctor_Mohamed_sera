import PropTypes from "prop-types";
import ReactWhatsapp from "react-whatsapp";

const WhatsappButton = ({ children }) => (
  <ReactWhatsapp
    className="text-green-500 hover:text-green-400"
    number="201095521277" 
    message="Hello, is there anyone available to chat with!"
  >
    <i className="fab fa-whatsapp" />
    <span> {children} </span>
  </ReactWhatsapp>
);

WhatsappButton.propTypes = {
  children: PropTypes.any,
};
export default WhatsappButton;
