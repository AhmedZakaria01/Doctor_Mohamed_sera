import PropTypes from "prop-types";
import cert_1 from "../assets/certificates/1.png";
import cert_2 from "../assets/certificates/2.png";
import cert_3 from "../assets/certificates/3.png";
import cert_4 from "../assets/certificates/4.png";
import { t } from "i18next";

function Certificates({ dataAos }) {
  return (
    <section className="text-center  bg-gray-100">
      <h2 data-aos={dataAos} className="header text-3xl font-bold mb-6">
        {t("Certificates")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={cert_1}
            alt="certificate 1"
            className="w-full h-auto object-cover"
            data-aos={dataAos}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={cert_2}
            alt="certificate 2"
            className="w-full h-auto object-cover"
            data-aos={dataAos}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={cert_3}
            alt="certificate 3"
            className="w-full h-auto object-cover"
            data-aos={dataAos}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={cert_4}
            alt="certificate 4"
            className="w-full h-auto object-cover"
            data-aos={dataAos}
          />
        </div>
      </div>
    </section>
  );
}

export default Certificates;

Certificates.propTypes = {
  dataAos: PropTypes.string,
};
