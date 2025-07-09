import { useTranslation } from "react-i18next";
import minimallyImg from "../assets/Minimally invasive surgeries.png"; // ensure correct image
import { Link } from "react-router-dom";

const MinimallyInvasiveSurgeries = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {t("Minimally invasive surgeries")}
          </h1>
          <p className="text-gray-600">
            {t(
              "Discover how modern minimally invasive surgical techniques lead to shorter hospital stays, quicker recovery, and better results."
            )}
          </p>
        </div>

        {/* Image and Intro */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={minimallyImg}
            alt={t("Minimally invasive surgeries")}
            className="rounded-xl shadow-md w-full h-auto"
          />
          <div className="text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800">
              {t("What Are Minimally Invasive Surgeries?")}
            </h2>
            <p>{t("MinimallyIntroP1")}</p>
            <p>{t("MinimallyIntroP2")}</p>
          </div>
        </div>

        {/* Common Procedures */}
        <section className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {t("Common Procedures")}
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "MinimallyCause1",
              "MinimallyCause2",
              "MinimallyCause3",
              "MinimallyCause4",
            ].map((key, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100"
              >
                <div className="w-8 h-8 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{t(key)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">
            {t("Benefits of Surgery")}
          </h3>
          <p className="text-gray-700">{t("MinimallyBenefits")}</p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t("Need More Help?")}</h3>
          <p className="mb-6">
            {t("Contact us or book your consultation today.")}
          </p>
          <Link
            to="/contact_us"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            {t("Contact Us")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MinimallyInvasiveSurgeries;
