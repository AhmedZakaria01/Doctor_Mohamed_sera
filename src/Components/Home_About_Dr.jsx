import dr_mohamed_about from "../assets/dr_mohamed.png";
import PropTypes from "prop-types";
import Button from "./Button";
import { t } from "i18next";
function About_Dr_Home() {
  return (
    <>
      <section className="text-black  ">
        <div className="flex xs:flex-col xl:flex-row xl:text-[20px] flex-wrap lg:flex-nowrap mx-auto gap-5 items-center ">
          <img
            src={dr_mohamed_about}
            className=" md:w-full rounded-md 2xl:w-1/2"
            alt=""
            data-aos="fade-up"
          />
          <div
            data-aos="fade-up"
            className="w-full px-5 text-start 2xl:text-[20px]"
          >
            <h3 className="py-4   text-start 2xl:text-[40px] ">
              {t("Dr Mohamed Sera Clinic")}
            </h3>
            <p className="text-gray-400 ">
              {t(
                "Dr. Mohamed Sera’s clinic combines expertise with the latest surgical innovations to ensure quick recovery and minimal discomfort. Whether you need a simple or complex procedure, our minimally invasive techniques provide you with the best care and faster healing. Your well-being is our priority-experience a healthier life today"
              )}
            </p>

            <Button text={t("More About Dr Mohamed Sera")} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About_Dr_Home;

About_Dr_Home.propTypes = {
  fadeUp: PropTypes.string,
  fadeRight: PropTypes.string,
};
