 import HomeOurServices from "../Components/HomeOurServices";
import About_Dr_Home from "../Components/Home_About_Dr";
import Certificates from "../Components/Certificates";
import AnalfissureImage from "../assets/Anal fissure surgery.png";
import HemorrhoidImage from "../assets/Hemorrhoid surgery.png";
import IngrownImage from "../assets/ingrown toenail surgeries.png";
import laparoscopicImage from "../assets/laparoscopic surgeries.png";
import MinimallyImage from "../assets/Minimally invasive surgeries.png";
import ColonImage from "../assets/Colon surgeries.png";
import { t } from "i18next";
import HeroSection from "../Components/HeroSection";
function Home() {
  const services = [
    {
      src: AnalfissureImage,
      text: "Surgical treatments for chronic constipation disorders, excision of rectal pockets, surgical procedures for anal hemorrhoids, anal fistulas, anal abscesses, and Hirschsprung's disease.",
      title: "Anal fissure surgery",
    },
    {
      src: HemorrhoidImage,
      text: "It refers to an abnormal dilation of the blood vessels located at the end of the rectum and anus.",
      title: "Hemorrhoid surgery",
    },
    {
      src: IngrownImage,
      text: "An ingrown nail occurs when the nail bends at its outer edge and grows into the skin.",
      title: "ingrown toenail surgeries",
    },
    {
      src: laparoscopicImage,
      text: "Laparoscopic gallbladder removal surgeries, surgical appendectomy, repair of abdominal wall muscles, and laparoscopic hernia repair.",
      title: "laparoscopic surgeries",
    },
    {
      src: MinimallyImage,
      text: "Laparoscopic gallbladder removal surgeries, surgical and laparoscopic appendectomy, abdominal wall muscle repair, and laparoscopic hernia repair.",
      title: "Minimally invasive surgeries",
    },
    {
      src: ColonImage,
      text: "Surgical removal of the colon, either completely or partially, using laparoscopic techniques, and excision of benign and malignant colon tumors.",
      title: "Colon surgeries",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className={` `}>
        <HeroSection />
      </section>

      {/* Certificates Section */}
      <Certificates dataAos={"fade-up"} />

      {/* About Dr Section */}
      <section className="my-5">
        <h3 data-aos="fade-up" className="py-2 text-center header m-0 mb-5">
          {t("About Dr Mohamed")}
        </h3>
        <About_Dr_Home />
      </section>

      {/* Our Services Section */}
      <section data-aos="fade-up" className=" ">
        <h3 data-aos="fade-up" className="py-2 text-center header m-0">
          {t("Our Services")}
        </h3>
        <div className="flex justify-center flex-wrap gap-y-5 my-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-center w-full md:w-1/2 lg:w-1/3 2xl:w-1/3 px-5"
            >
              <HomeOurServices
                src={service.src}
                text={service.text}
                title={service.title}
                dataAos={"fade-up"}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
