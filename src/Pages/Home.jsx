//  import HomeOurServices from "../Components/HomeOurServices";
// import About_Dr_Home from "../Components/Home_About_Dr";
// import Certificates from "../Components/Certificates";
// import AnalfissureImage from "../assets/Anal fissure surgery.png";
// import HemorrhoidImage from "../assets/Hemorrhoid surgery.png";
// import IngrownImage from "../assets/ingrown toenail surgeries.png";
// import laparoscopicImage from "../assets/laparoscopic surgeries.png";
// import MinimallyImage from "../assets/Minimally invasive surgeries.png";
// import ColonImage from "../assets/Colon surgeries.png";
// import { t } from "i18next";
// import HeroSection from "../Components/HeroSection";
// function Home() {
//   const services = [
//     {
//       src: AnalfissureImage,
//       text: "Surgical treatments for chronic constipation disorders, excision of rectal pockets, surgical procedures for anal hemorrhoids, anal fistulas, anal abscesses, and Hirschsprung's disease.",
//       title: "Anal fissure surgery",
//     },
//     {
//       src: HemorrhoidImage,
//       text: "It refers to an abnormal dilation of the blood vessels located at the end of the rectum and anus.",
//       title: "Hemorrhoid surgery",
//     },
//     {
//       src: IngrownImage,
//       text: "An ingrown nail occurs when the nail bends at its outer edge and grows into the skin.",
//       title: "ingrown toenail surgeries",
//     },
//     {
//       src: laparoscopicImage,
//       text: "Laparoscopic gallbladder removal surgeries, surgical appendectomy, repair of abdominal wall muscles, and laparoscopic hernia repair.",
//       title: "laparoscopic surgeries",
//     },
//     {
//       src: MinimallyImage,
//       text: "Laparoscopic gallbladder removal surgeries, surgical and laparoscopic appendectomy, abdominal wall muscle repair, and laparoscopic hernia repair.",
//       title: "Minimally invasive surgeries",
//     },
//     {
//       src: ColonImage,
//       text: "Surgical removal of the colon, either completely or partially, using laparoscopic techniques, and excision of benign and malignant colon tumors.",
//       title: "Colon surgeries",
//     },
//   ];

//   return (
//     <>
//       {/* Header Section */}
//       <section className={` `}>
//         <HeroSection />
//       </section>

//       {/* Certificates Section */}
//       <Certificates dataAos={"fade-up"} />

//       {/* About Dr Section */}
//       <section className="my-5">
//         <h3 data-aos="fade-up" className="py-2 text-center header m-0 mb-5">
//           {t("About Dr Mohamed")}
//         </h3>
//         <About_Dr_Home />
//       </section>

//       {/* Our Services Section */}
//       <section data-aos="fade-up" className=" ">
//         <h3 data-aos="fade-up" className="py-2 text-center header m-0">
//           {t("Our Services")}
//         </h3>
//         <div className="flex justify-center flex-wrap gap-y-5 my-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="flex justify-center w-full md:w-1/2 lg:w-1/3 2xl:w-1/3 px-5"
//             >
//               <HomeOurServices
//                 src={service.src}
//                 text={service.text}
//                 title={service.title}
//                 dataAos={"fade-up"}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

// import { t } from "i18next";
// import HeroSection from "../Components/HeroSection";
// import Certificates from "../Components/Certificates";
// import About_Dr_Home from "../Components/Home_About_Dr";
// import HomeOurServices from "../Components/HomeOurServices";

// import AnalfissureImage from "../assets/Anal fissure surgery.png";
// import HemorrhoidImage from "../assets/Hemorrhoid surgery.png";
// import IngrownImage from "../assets/ingrown toenail surgeries.png";
// import laparoscopicImage from "../assets/laparoscopic surgeries.png";
// import MinimallyImage from "../assets/Minimally invasive surgeries.png";
// import ColonImage from "../assets/Colon surgeries.png";

// function Home() {
//   const services = [
//     {
//       src: AnalfissureImage,
//       text: t(
//         "Surgical treatments for chronic constipation disorders, excision of rectal pockets, surgical procedures for anal hemorrhoids, anal fistulas, anal abscesses, and Hirschsprung's disease."
//       ),
//       title: t("Anal fissure surgery"),
//     },
//     {
//       src: HemorrhoidImage,
//       text: t(
//         "It refers to an abnormal dilation of the blood vessels located at the end of the rectum and anus."
//       ),
//       title: t("Hemorrhoid surgery"),
//     },
//     {
//       src: IngrownImage,
//       text: t(
//         "An ingrown nail occurs when the nail bends at its outer edge and grows into the skin."
//       ),
//       title: t("ingrown toenail surgeries"),
//     },
//     {
//       src: laparoscopicImage,
//       text: t(
//         "Laparoscopic gallbladder removal surgeries, surgical appendectomy, repair of abdominal wall muscles, and laparoscopic hernia repair."
//       ),
//       title: t("laparoscopic surgeries"),
//     },
//     {
//       src: MinimallyImage,
//       text: t(
//         "Laparoscopic gallbladder removal surgeries, surgical and laparoscopic appendectomy, abdominal wall muscle repair, and laparoscopic hernia repair."
//       ),
//       title: t("Minimally invasive surgeries"),
//     },
//     {
//       src: ColonImage,
//       text: t(
//         "Surgical removal of the colon, either completely or partially, using laparoscopic techniques, and excision of benign and malignant colon tumors."
//       ),
//       title: t("Colon surgeries"),
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <section>
//         <HeroSection />
//       </section>

//       {/* Certificates Section */}
//       <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <Certificates dataAos="fade-up" />
//         </div>
//       </section>

//       {/* About Dr. Section */}
//       <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <h2
//             data-aos="fade-up"
//             className="hidden sm:block text-center text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800"
//           >
//             {t("About Dr Mohamed Sera")}
//           </h2>

//           <About_Dr_Home />
//         </div>
//       </section>

//       {/* Our Services Section */}
//       <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <h2
//             data-aos="fade-up"
//             className="text-center text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800"
//           >
//             {t("Our Services")}
//           </h2>
//           <div className="flex justify-center flex-wrap gap-y-5 my-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="flex justify-center w-full md:w-1/2 lg:w-1/3 2xl:w-1/3 px-5"
//               >
//                 <HomeOurServices
//                   src={service.src}
//                   text={service.text}
//                   title={service.title}
//                   to={`/services/${index}`} // example path
//                   dataAos={"fade-up"}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;
import { t } from "i18next";
import HeroSection from "../Components/HeroSection";
import Certificates from "../Components/Certificates";
import About_Dr_Home from "../Components/Home_About_Dr";
import HomeOurServices from "../Components/HomeOurServices";

import AnalfissureImage from "../assets/Anal fissure surgery.png";
import HemorrhoidImage from "../assets/Hemorrhoid surgery.png";
import IngrownImage from "../assets/ingrown toenail surgeries.png";
import laparoscopicImage from "../assets/laparoscopic surgeries.png";
import MinimallyImage from "../assets/Minimally invasive surgeries.png";
import ColonImage from "../assets/Colon surgeries.png";

function Home() {
  const services = [
    {
      src: AnalfissureImage,
      text: t(
        "Surgical treatments for chronic constipation disorders, excision of rectal pockets, surgical procedures for anal hemorrhoids, anal fistulas, anal abscesses, and Hirschsprung's disease."
      ),
      title: t("Anal fissure surgery"),
      link: "/AnalFissureSurgery",
    },
    {
      src: HemorrhoidImage,
      text: t(
        "It refers to an abnormal dilation of the blood vessels located at the end of the rectum and anus."
      ),
      title: t("Hemorrhoid surgery"),
      link: "/HemorrhoidSurgery",
    },
    {
      src: IngrownImage,
      text: t(
        "An ingrown nail occurs when the nail bends at its outer edge and grows into the skin."
      ),
      title: t("ingrown toenail surgeries"),
      link: "/IngrownToenailSurgery",
    },
    {
      src: laparoscopicImage,
      text: t(
        "Laparoscopic gallbladder removal surgeries, surgical appendectomy, repair of abdominal wall muscles, and laparoscopic hernia repair."
      ),
      title: t("laparoscopic surgeries"),
      link: "/LaparoscopicSurgeries",
    },
    {
      src: MinimallyImage,
      text: t(
        "Laparoscopic gallbladder removal surgeries, surgical and laparoscopic appendectomy, abdominal wall muscle repair, and laparoscopic hernia repair."
      ),
      title: t("Minimally invasive surgeries"),
      link: "/MinimallyInvasiveSurgeries",
    },
    {
      src: ColonImage,
      text: t(
        "Surgical removal of the colon, either completely or partially, using laparoscopic techniques, and excision of benign and malignant colon tumors."
      ),
      title: t("Colon surgeries"),
      link: "/ColonSurgeries",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Certificates Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Certificates dataAos="fade-up" />
        </div>
      </section>

      {/* About Dr. Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <About_Dr_Home />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-800">
            {t("Our Services")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <HomeOurServices
                key={index}
                src={service.src}
                text={service.text}
                title={service.title}
                to={service.link}
                dataAos="fade-up"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
