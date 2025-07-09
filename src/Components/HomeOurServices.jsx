// import { t } from "i18next";
// import PropTypes from "prop-types";

// function HomeOurServices({ src, text, title, dataAos }) {
//   return (
//     <div
//       data-aos={dataAos}
//       className="relative w-full group overflow-hidden rounded-md text-center"
//     >
//       <img
//         src={src}
//         alt="hover"
//         className="w-full h-auto transition-transform duration-700 ease-in-out transform group-hover:scale-105"
//       />
//       <div className="absolute inset-0 flex items-center justify-center  text-white bg-black bg-opacity-80 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
//         <span className="xs:text-[16px] lg:text-[20px] px-4 font-extrlight font-sans  ">
//           {t(text)}
//         </span>
//       </div>
//       <p className="bg-gradient-to-r from-cyan-900 to-blue-900 py-2">
//         {t(title)}
//       </p>
//     </div>
//   );
// }

// HomeOurServices.propTypes = {
//   src: PropTypes.string,
//   text: PropTypes.string,
//   title: PropTypes.string,
//   dataAos: PropTypes.string,
// };

// export default HomeOurServices;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeOurServices({ src, text, title, dataAos, to }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="block"
      data-aos={dataAos}
      dir={isArabic ? "rtl" : "ltr"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-md mx-auto group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-500">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={src}
            alt={t(title)}
            className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition duration-500" />

          {/* Hover Text */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-500 ease-in-out
-   ${isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-0"}
+   ${
              isHovered
                ? "opacity-100 backdrop-blur-sm"
                : "opacity-0 sm:opacity-100 sm:backdrop-blur-sm"
            }
  `}
          >
            <p
              className={`text-white text-sm sm:text-base leading-relaxed px-2 text-center ${
                isArabic ? "font-arabic" : "font-sans"
              }`}
            >
              {t(text)}
            </p>
          </div>  
        </div>

        {/* Title Section */}
        <div className="relative p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-gray-100">
          <h3
            className={`text-lg sm:text-xl font-bold text-gray-800 text-center transition-colors duration-300 group-hover:text-blue-600 ${
              isArabic ? "font-arabic" : "font-sans"
            }`}
          >
            {t(title)}
          </h3>
          <div className="mt-2 flex justify-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </div>
        </div>
      </div>
    </Link>
  );
}

HomeOurServices.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataAos: PropTypes.string,
  to: PropTypes.string.isRequired, // link destination
};

HomeOurServices.defaultProps = {
  dataAos: "fade-up",
};

export default HomeOurServices;
