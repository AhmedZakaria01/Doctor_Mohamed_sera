// LanguageSwitcher.jsx
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ direction, setDirection }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language in i18next
    setDirection(lang === "ar" ? "rtl" : "ltr"); // Set the text direction
  };

  return (
    <div>
      {direction === "rtl" ? (
        <button
          className="px-3 py-1 rounded-md text-cyan-500 hover:text-cyan-300 hover:border-cyan-400 text-[12px]"
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </button>
      ) : (
        <button
          className="px-3 py-1 rounded-md text-cyan-500 hover:text-cyan-300 hover:border-cyan-400 text-[12px]"
          onClick={() => handleLanguageChange("ar")}
        >
          AR
        </button>
      )}
    </div>
  );
};

LanguageSwitcher.propTypes = {
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
