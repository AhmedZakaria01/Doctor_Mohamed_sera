import PropTypes from "prop-types"; // Import PropTypes
import ReactWhatsapp from "react-whatsapp";

const WhatsappButton = () => (
  <ReactWhatsapp
    className="text-green-500 hover:text-green-400"
    number="+20 1095521277"
    message="Hello, is there anyone available to chat with!"
  >
    <i className="fab fa-whatsapp"></i>
  </ReactWhatsapp>
);

 
export default WhatsappButton;
