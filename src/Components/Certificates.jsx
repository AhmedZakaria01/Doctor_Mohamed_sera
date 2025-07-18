// import PropTypes from "prop-types";
// import cert_1 from "../assets/certificates/1.png";
// import cert_2 from "../assets/certificates/2.png";
// import cert_3 from "../assets/certificates/3.png";
// import cert_4 from "../assets/certificates/4.png";
// import { t } from "i18next";

// function Certificates({ dataAos }) {
//   return (
//     <section className="text-center  bg-gray-100">
//       <h2 data-aos={dataAos} className="header text-3xl font-bold mb-6">
//         {t("Certificates")}
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <img
//             src={cert_1}
//             alt="certificate 1"
//             className="w-full h-auto object-cover"
//             data-aos={dataAos}
//           />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <img
//             src={cert_2}
//             alt="certificate 2"
//             className="w-full h-auto object-cover"
//             data-aos={dataAos}
//           />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <img
//             src={cert_3}
//             alt="certificate 3"
//             className="w-full h-auto object-cover"
//             data-aos={dataAos}
//           />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <img
//             src={cert_4}
//             alt="certificate 4"
//             className="w-full h-auto object-cover"
//             data-aos={dataAos}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certificates;

// Certificates.propTypes = {
//   dataAos: PropTypes.string,
// };






import PropTypes from "prop-types";
import { t } from "i18next";

import cert_1 from "../assets/certificates/1.png";
import cert_2 from "../assets/certificates/2.png";
import cert_3 from "../assets/certificates/3.png";
import cert_4 from "../assets/certificates/4.png";

const certificateImages = [
  { src: cert_1, alt: "Certificate 1" },
  { src: cert_2, alt: "Certificate 2" },
  { src: cert_3, alt: "Certificate 3" },
  { src: cert_4, alt: "Certificate 4" },
];

function Certificates({ dataAos }) {
  return (
    <section
      aria-label="Certificates Section"
      className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          data-aos={dataAos}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10"
        >
          {t("Certificates")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificateImages.map((cert, index) => (
            <div
              key={index}
              data-aos={dataAos}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 border border-gray-200 ring-1 ring-white/20 backdrop-blur-sm"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-full object-contain aspect-[4/3] p-4"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Certificates.propTypes = {
  dataAos: PropTypes.string,
};

export default Certificates;
