// import { Link } from "react-router-dom";
// import WhatsappButton from "./WhatsappButton";

// const Footer = () => {
//   return (
//     <footer className="text-light bg-gradient-to-r from-blue-900 to-cyan-900 py-4 ">
//       <div className="flex justify-center xs:flex-col xs:items-center xs:gap-4 ">
//         <div className="flex items-center gap-5">
//           <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
//             <i className="fab fa-facebook-f text-blue-600 hover:text-gold"></i>
//           </Link>
//           <Link to="https://www.instagram.com/dr.mohamed_sera/" target="_self">
//             <i className="fab fa-instagram text-pink-500 hover:text-gold"></i>
//           </Link>
//           <Link
//             to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
//             target="_self"
//           >
//             <i className="fab fa-linkedin-in text-blue-500 hover:text-gold"></i>
//           </Link>
//           <Link to="https://www.youtube.com/@yehiasera" target="_self">
//             <i className="fab fa-youtube text-red-500 hover:text-gold"></i>
//           </Link>
//           <WhatsappButton className="text-green-500 hover:text-gold" />
//         </div>
//         <div dir="ltr" className="flex content-center items-center px-5 ">
//           <i className="fa fa-phone text-green-400 hover:text-gold px-2"></i>
//           <p> +02 010 955 212 77 </p>
//         </div>
//       </div>

//       <div className="pt-5">
//         <p>© 2024 Dr Mohamed Sera . All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WhatsappButton from "./WhatsappButton";

const Footer = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-800 text-white py-10 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row justify-between items-start">
        {/* About Section */}
        <div className="w-full md:w-1/3 space-y-4">
          <h4 className="text-lg font-semibold text-cyan-300 text-center">
            {isArabic ? "د. محمد صيره" : "Dr Mohamed Sera"}
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            {isArabic
              ? "استشارات وعناية جراحية متقدمة باستخدام أحدث تقنيات الجراحة الأقل تداخلاً. صحتك هي أولويتنا."
              : "Expert surgical consultation and care with the latest minimally invasive techniques. Your health, our mission."}
          </p>
        </div>
        {/* Contact Section */}
        <div className="w-full md:w-1/3 space-y-4">
          <h4 className="text-lg font-semibold text-cyan-300 text-center">
            {isArabic ? "تواصل معنا" : "Contact"}
          </h4>
          <div className="flex justify-center items-center gap-3">
            <i className="fas fa-phone text-green-400 text-base"></i>
            <span className="text-sm sm:text-base ltr text-left" dir="ltr">
              +02 010 955 212 77
            </span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <WhatsappButton className="text-sm sm:text-base hover:underline">
              {isArabic ? "تواصل معنا عبر whatsapp" : "Chat on WhatsApp"}
            </WhatsappButton>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/3 space-y-4 text-center">
          <h4 className="text-lg font-semibold text-cyan-300">
            {isArabic ? "تابعنا" : "Follow Us"}
          </h4>
          <div className="flex gap-4 text-xl justify-center">
            <Link
              to="https://www.facebook.com/DrMohamedsera"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="https://www.instagram.com/dr.mohamed_sera/"
              target="_blank"
              className="hover:text-pink-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
              target="_blank"
              className="hover:text-blue-300 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link
              to="https://www.youtube.com/@yehiasera"
              target="_blank"
              className="hover:text-red-400 transition"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Dr Mohamed Sera
        {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
};

export default Footer;
