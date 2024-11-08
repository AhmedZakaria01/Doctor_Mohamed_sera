import { t } from "i18next";
import Button from "./Button";
import circleBg from "../assets/circle_bg.png";
import WhatsappButton from "./WhatsappButton";

function HeroSection() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-blue-950 to-cyan-950 h-screen text-white text-center">
      {/* Home Header */}
      <div className="flex flex-col items-center">
        <img
          src={circleBg}
          alt=""
          data-aos="zoom-out"
          className="xs:w-[200px] sm:w-[300px] sm:mb-10"
        />
        <div data-aos="fade-up" data-aos-duration="1000" className="px-2 mt-5">
          <h1 className="text-[24px] sm:text-[28px] sm:my-2 md:text-[32px] 2xl:text-[40px] bg-gradient-to-r from-blue-400 to-emerald-200 bg-clip-text text-transparent">
            {t("Dr Mohamed Sera")}
          </h1>
          <h5 className="  md:text-[24px] sm:my-4 text-teal-300 bg-gradient-to-r from-teal-500 to-white px-2 bg-clip-text text-transparent">
            {t("General Surgery, Endoscopy, and Colon and Rectal Surgeries")}
          </h5>
          <h4 className="text-[20px] sm:text-[24px] md:text-[28px] 2xl:text-[32px] sm:my-4">
            {t("Get Expert ")}
            <span className="text-teal-300 bg-gradient-to-r from-teal-200 to-teal-600 px-2 bg-clip-text text-transparent">
              {t("Medical Consultation !")}
            </span>
          </h4>
          {/* <p className="text-gray-400 text-sm sm:text-base md:text-2xl sm:my-4">
            {t(
              "Dr Mohamed Sera provide expert medical advice and consultation"
            )}
          </p> */}
          <p className="text-sm sm:text-base md:text-2xl sm:my-4  text-gray-300">
            {t("Get in touch with our team to discuss")}
          </p>

         
            <WhatsappButton
              className="text-green-500 hover:text-gold"
              size={"text-[15px]"}
              button={'button'}
              text={'Book Now'}
            />
 
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
