import { t } from "i18next";
import PropTypes from "prop-types";

function HomeOurServices({ src, text, title, dataAos }) {
  return (
    <div
      data-aos={dataAos}
      className="relative w-full group overflow-hidden rounded-md text-center"
    >
      <img
        src={src}
        alt="hover"
        className="w-full h-auto transition-transform duration-700 ease-in-out transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center  text-white bg-black bg-opacity-80 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
        <span className="xs:text-[16px] lg:text-[20px] px-4 font-extrlight font-sans  ">
          {t(text)}
        </span>
      </div>
      <p className="bg-gradient-to-r from-cyan-900 to-blue-900 py-2">
        {t(title)}
      </p>
    </div>
  );
}

HomeOurServices.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  dataAos: PropTypes.string,
};

export default HomeOurServices;
