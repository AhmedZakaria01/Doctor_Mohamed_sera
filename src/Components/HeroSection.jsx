// import { t } from "i18next";
// import Button from "./Button";
// import circleBg from "../assets/circle_bg.png";

// function HeroSection() {
//   return (
//     <div className="flex justify-center items-center bg-gradient-to-b from-blue-950 to-cyan-950 h-screen text-white text-center">
//       {/* Home Header */}
//       <div className="flex flex-col items-center">
//         <img
//           src={circleBg}
//           alt=""
//           data-aos="zoom-out"
//           className="xs:w-[200px] sm:w-[300px] sm:mb-10"
//         />
//         <div data-aos="fade-up" data-aos-duration="1000" className="px-2 mt-5">
//           <h1 className="text-[24px] sm:text-[28px] sm:my-2 md:text-[32px] 2xl:text-[40px] bg-gradient-to-r from-blue-400 to-emerald-200 bg-clip-text text-transparent">
//             {t("Dr Mohamed Sera")}
//           </h1>
//           <h3 className="  md:text-[24px] sm:my-4">{t("Surgeon")}</h3>
//           <h4 className="text-[20px] sm:text-[24px] md:text-[28px] 2xl:text-[32px] sm:my-4">
//             {t("Get Expert ")}
//             <span className="text-teal-300 bg-gradient-to-r from-teal-200 to-teal-600 px-2 bg-clip-text text-transparent">
//               {t("Medical Consultation !")}
//             </span>
//           </h4>
//           <p className="text-gray-400 text-sm sm:text-base md:text-lg sm:my-4">
//             {t(
//               "Dr Mohamed Sera provide expert medical advice and consultation. Get in touch with our team to discuss"
//             )}
//           </p>
//           <Button text={"Book Now"} to={"contact_us_us"} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

// import { useTranslation } from "react-i18next";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Button from "./Button";
// import circleBg from "../assets/circle_bg.png";

// function HeroSection() {
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   // Reinitialize AOS on language change
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false, // allow it to re-animate
//     });
//     AOS.refresh();
//   }, [i18n.language]); // Watch language switch

//   return (
//     <section
//       dir={isArabic ? "rtl" : "ltr"}
//       className="relative h-screen w-full bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-white overflow-hidden font-sans"
//     >
//       <div className="absolute inset-0 bg-black/30 z-0" />

//       <div
//         className={`relative z-10 container mx-auto px-6 md:px-16 h-full flex flex-col ${
//           isArabic ? "md:flex-row-reverse" : "md:flex-row"
//         } items-center justify-between`}
//       >
//         {/* Text Section */}
//         <div
//           data-aos="fade-up"
//           className={`w-full md:w-1/2 text-center ${
//             isArabic ? "md:text-right" : "md:text-left"
//           } mt-20 md:mt-0 ${isArabic ? "font-arabic" : ""}`}
//         >
//           <p className="text-teal-300 uppercase tracking-widest text-sm mb-3">
//             {t("hero.tagline")}
//           </p>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
//             {t("hero.title")}
//           </h1>

//           <h2 className="text-xl md:text-2xl text-cyan-200 font-medium mb-4">
//             {t("hero.subtitle")}
//           </h2>

//           <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
//             {t("hero.description")}
//           </p>

//           <div
//             className={`flex ${isArabic ? "justify-start" : "justify-start"}`}
//           >
//             <Button text={t("hero.cta")} to="contact_us_us" />
//           </div>
//         </div>

//         {/* Image Section */}
//         <div
//           data-aos="zoom-in"
//           className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
//         >
//           <img
//             src={circleBg}
//             alt={t("hero.imageAlt")}
//             className="w-72 sm:w-96 md:w-[500px] rounded-full shadow-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import circleBg from "../assets/circle_bg.png";

function HeroSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, [i18n.language]);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative min-h-screen w-full bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-white overflow-hidden font-sans"
      style={{
        minHeight: "100dvh", // Dynamic viewport height for better mobile support
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 min-h-full">
        <div
          className={`flex flex-col items-center justify-center min-h-screen gap-6 sm:gap-8 md:gap-12 pt-12 pb-8 sm:py-16 md:py-16 ${
            isArabic ? "md:flex-row-reverse" : "md:flex-row"
          } md:justify-between`}
        >
          {/* Text Content */}
          <div
            data-aos="fade-up"
            className={`w-full md:w-1/2 text-center ${
              isArabic ? "md:text-right font-arabic" : "md:text-left"
            } order-2 md:order-1`}
          >
            <p className="text-teal-300 uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3">
              {t("hero.tagline")}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent px-2">
              {t("hero.title")}
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-200 font-medium mb-3 sm:mb-4 px-2">
              {t("hero.subtitle")}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-sm sm:max-w-md md:max-w-xl mx-auto md:mx-0 leading-relaxed px-2">
              {t("hero.description")}
            </p>
            <div
              className={`flex ${
                isArabic
                  ? "justify-center md:justify-start"
                  : "justify-center md:justify-start"
              }`}
            >
              <Button text={t("hero.cta")} to="/contact_us" />
            </div>
          </div>

          {/* Image */}
          <div
            data-aos="zoom-in"
            className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              <img
                src={circleBg}
                alt={t("hero.imageAlt") || "Dr Mohamed Sera"}
                className="max-w-[200px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[480px] xl:max-w-[500px] w-full h-auto rounded-full shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
