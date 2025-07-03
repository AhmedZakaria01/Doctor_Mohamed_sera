// import dr_mohamed_about from "../assets/dr_mohamed.png";
// import Button from "./Button";
// import { t } from "i18next";
// function About_Dr_Home() {
//   return (
//     <>
//       <section className="text-black  ">
//         <div className="flex xs:flex-col xl:flex-row xl:text-[20px] flex-wrap lg:flex-nowrap mx-auto gap-5 items-center ">
//           <img
//             src={dr_mohamed_about}
//             className=" md:w-full rounded-md 2xl:w-1/2"
//             alt=""
//             data-aos="fade-up"
//           />
//           <div
//             data-aos="fade-up"
//             className="w-full px-5 text-start 2xl:text-[20px]"
//           >
//             <h3 className="py-4   text-start 2xl:text-[40px] ">
//               Dr Mohamed Sera Clinic
//             </h3>
//             <p className="text-gray-400 ">
//               <strong className="text-gray-500">
//                 {t("Dr. Mohamed Sera’s")}
//               </strong>
//               {t(
//                 "clinic combines expertise with the latest surgical innovations to ensure quick recovery and minimal discomfort. Whether you need a simple or complex procedure, our minimally invasive techniques provide you with the best care and faster healing. Your well-being is our priority-experience a healthier life today"
//               )}
//             </p>

//             <Button text={t("More About Dr Mohamed")} />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default About_Dr_Home;



import { useTranslation } from "react-i18next";
import dr_mohamed_about from "../assets/dr_mohamed.png";
import Button from "./Button";

function About_Dr_Home() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      aria-label="About Dr. Mohamed Sera"
      className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16"
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 ${
          isArabic ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Content */}
        <div
          data-aos="fade-up"
          className={`w-full lg:w-1/2 ${
            isArabic ? "text-right font-arabic" : "text-left"
          } order-1 lg:order-1`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
            {t("Dr Mohamed Sera Clinic")}
          </h2>

          {/* Image on mobile - appears after heading */}
          <div className="lg:hidden mb-6 flex justify-center">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 ring-1 ring-white/20 backdrop-blur-sm p-4 w-full max-w-md">
              <img
                src={dr_mohamed_about}
                alt={t("About Dr Mohamed")}
                className="w-full h-auto object-contain rounded-md"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            {t(
              "clinic combines expertise with the latest surgical innovations to ensure quick recovery and minimal discomfort. Whether you need a simple or complex procedure, our minimally invasive techniques provide you with the best care and faster healing. Your well-being is our priority-experience a healthier life today"
            )}
          </p>

          <Button text={t("More About Dr Mohamed")} to="/about_us" />
        </div>

        {/* Image on desktop - hidden on mobile */}
        <div
          data-aos="fade-up"
          className="hidden lg:flex w-full lg:w-1/2 justify-center order-2 lg:order-2"
        >
          <div className="bg-white rounded-xl shadow-md border border-gray-200 ring-1 ring-white/20 backdrop-blur-sm p-4 w-full max-w-md">
            <img
              src={dr_mohamed_about}
              alt={t("About Dr Mohamed")}
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_Dr_Home;