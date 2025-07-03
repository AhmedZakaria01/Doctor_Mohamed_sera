import PropTypes from "prop-types";
import ReactWhatsapp from "react-whatsapp";

const WhatsappButton = ({ children, float }) => (
  <>
    {float ? (
      <ReactWhatsapp
        number="201095521277"
        message="Hello, is there anyone available to chat with!"
        className="my-2 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl" />
      </ReactWhatsapp>
    ) : (
      <ReactWhatsapp
        className="text-green-500 hover:text-green-400"
        number="201095521277"
        message="Hello, is there anyone available to chat with!"
      >
        <i className="fab fa-whatsapp" />
        <span> {children} </span>
      </ReactWhatsapp>
    )}
  </>
);

WhatsappButton.propTypes = {
  children: PropTypes.any,
  float: PropTypes.bool,
};
export default WhatsappButton;
