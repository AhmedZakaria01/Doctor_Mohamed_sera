// src/components/Footer.js

import { Link } from "react-router-dom";
import WhatsappButton from "./WhatsappButton";

const Footer = () => {
  return (
    <footer className="text-light bg-gradient-to-r from-blue-900 to-cyan-900 py-4 ">
      <div className="flex justify-center xs:flex-col xs:items-center xs:gap-4 ">
        <div className="flex items-center gap-5">
          <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
            <i className="fab fa-facebook-f text-blue-600 hover:text-gold"></i>
          </Link>
          <Link to="https://www.instagram.com/dr.mohamed_sera/" target="_self">
            <i className="fab fa-instagram text-pink-500 hover:text-gold"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
            target="_self"
          >
            <i className="fab fa-linkedin-in text-blue-500 hover:text-gold"></i>
          </Link>
          <Link to="https://www.youtube.com/@yehiasera" target="_self">
            <i className="fab fa-youtube text-red-500 hover:text-gold"></i>
          </Link>
          <WhatsappButton className="text-green-500 hover:text-gold" />
        </div>
        <div dir="ltr" className="flex content-center items-center px-5 ">
          <i className="fa fa-phone text-green-400 hover:text-gold px-2"></i>
          <p> +02 010 955 212 77 </p>
        </div>
      </div>

      <div className="pt-5">
        <p>© 2024 Dr Mohamed Sera . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
