// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import WhatsappButton from "../Components/WhatsappButton";
// import PropTypes from "prop-types";
// import { t } from "i18next";
// import LanguageSwitcher from "./LanguageSwitcher";

// const Navbar = ({ direction, setDirection }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavItemClick = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       if (scrollPosition >= 300) {
//         setHasScrolled(true);
//         window.removeEventListener("scroll", handleScroll);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [hasScrolled]);

//   return (
//     <nav
//       className={`${
//         hasScrolled
//           ? "transition-all duration-1000 bg-gradient-to-b from-cyan-900 to-blue-900"
//           : "bg-gradient-to-t from-blue-900 to-cyan-900"
//       }  lg:px-8 text-light fixed top-0 left-0 right-0 py-1 z-10 `}
//     >
//       <section className="xl:container mx-auto ">
//         <div className="mx-auto flex justify-between items-center lg:hidden w-100">
//           <Link className="flex items-center" to="/">
//             <img src={logo} className="w-12 h-12 mx-5" alt="logo" />
//             <span className="hover:text-teal-300">{t("Dr Mohamed Sera")}</span>
//           </Link>
//           <button
//             className="lg:hidden flex items-center px-2 py-1 text-light focus:outline-none"
//             onClick={handleToggle}
//             aria-label="Toggle navigation"
//           >
//             <svg
//               className="w-6 h-6 hover:text-teal-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={`M4 6h16M4 12h16m-7 6h7`}
//               />
//             </svg>
//           </button>
//         </div>

//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } lg:hidden flex-col justify-between items-center p-4 bg-gradient-to-b from-cyan-900 to-blue-900 `}
//         >
//           <ul className="flex gap-y-5 text-center flex-col space-y-2">
//             <li>
//               <Link
//                 className="hover:text-teal-300"
//                 to="/"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Home")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300"
//                 to="contact_us"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Contact Us")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300"
//                 to="/services"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Our Services")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300"
//                 to="/about_us"
//                 onClick={handleNavItemClick}
//               >
//                 {t("About Us")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300"
//                 to="/photo_gallery"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Photo Gallery")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300"
//                 to="/video_gallery"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Video Gallery")}
//               </Link>
//             </li>
//           </ul>

//           <div className="flex gap-4 my-5 justify-center">
//             <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
//               <i className="fab fa-facebook-f text-blue-600 hover:text-blue-500"></i>
//             </Link>
//             <Link
//               to="https://www.instagram.com/dr.mohamed_sera/"
//               target="_self"
//             >
//               <i className="fab fa-instagram text-pink-500 hover:text-pink-400"></i>
//             </Link>
//             <Link
//               to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
//               target="_self"
//             >
//               <i className="fab fa-linkedin-in text-blue-500 hover:text-blue-400"></i>
//             </Link>
//             <Link to="https://www.youtube.com/@yehiasera" target="_self">
//               <i className="fab fa-youtube text-red-500 hover:text-red-400"></i>
//             </Link>
//             <WhatsappButton />
//             <LanguageSwitcher
//               direction={direction}
//               setDirection={setDirection}
//               className="my-4"
//             />
//           </div>
//         </div>

//         {/* /////////////////////////////////////////////// */}

//         <div
//           className={`hidden lg:flex md:items-center md:justify-between md:space-x-6`}
//         >
//           <Link className="flex items-center" to="/">
//             <img src={logo} className="w-12 h-12 mx-5" alt="logo" />
//             <span className="hover:text-teal-300">{t("Dr Mohamed Sera")}</span>
//           </Link>

//           <ul className="flex gap-4">
//             <li>
//               <Link
//                 className="hover:text-teal-300 md:text-sm"
//                 to="/"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Home")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300 md:text-sm"
//                 to="contact_us"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Contact Us")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300 md:text-sm"
//                 to="/services"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Our Services")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300 md:text-sm"
//                 to="/about_us"
//                 onClick={handleNavItemClick}
//               >
//                 {t("About Us")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300 md:text-sm"
//                 to="/photo_gallery"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Photo Gallery")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-teal-300 md:text-sm"
//                 to="/video_gallery"
//                 onClick={handleNavItemClick}
//               >
//                 {t("Video Gallery")}
//               </Link>
//             </li>
//           </ul>

//           <div className="flex items-center gap-4">
//             <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
//               <i className="fab fa-facebook-f text-blue-600 hover:text-blue-500"></i>
//             </Link>
//             <Link
//               to="https://www.instagram.com/dr.mohamed_sera/"
//               target="_self"
//             >
//               <i className="fab fa-instagram text-pink-500 hover:text-pink-400"></i>
//             </Link>
//             <Link
//               to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
//               target="_self"
//             >
//               <i className="fab fa-linkedin-in text-blue-500 hover:text-blue-400"></i>
//             </Link>
//             <Link to="https://www.youtube.com/@yehiasera" target="_self">
//               <i className="fab fa-youtube text-red-500 hover:text-red-400"></i>
//             </Link>
//             <WhatsappButton />
//             <LanguageSwitcher
//               direction={direction}
//               setDirection={setDirection}
//             />
//           </div>
//         </div>
//       </section>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   direction: PropTypes.string.isRequired,
//   setDirection: PropTypes.func.isRequired,
// };

// export default Navbar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import WhatsappButton from "../Components/WhatsappButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "i18next";

const Navbar = ({ direction, setDirection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleNavItemClick = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setHasScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-sm ${
        hasScrolled
          ? "bg-gradient-to-b from-cyan-900 to-blue-900"
          : "bg-gradient-to-t from-blue-900 to-cyan-900"
      }`}
    >
      <section className="xl:container mx-auto px-4 lg:px-8 py-2">
        {/* Mobile Header */}
        <div className="flex justify-between items-center lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-white font-semibold text-lg hover:text-teal-300">
              Dr Mohamed Sera
            </span>
          </Link>
          <button
            onClick={handleToggle}
            className="text-white hover:text-teal-300 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 origin-top overflow-hidden ${
            isOpen ? "max-h-[500px] mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-white text-sm font-medium">
            <li>
              <Link
                to="/"
                onClick={handleNavItemClick}
                className="hover:text-teal-300 transition-colors"
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact_us"
                onClick={handleNavItemClick}
                className="hover:text-teal-300 transition-colors"
              >
                {t("navbar.contact")}
              </Link>
            </li>
            <li>
              <Link
                to="/about_us"
                onClick={handleNavItemClick}
                className="hover:text-teal-300 transition-colors"
              >
                {t("navbar.about")}
              </Link>
            </li>
            {/* <li>
              <Link
                to="/video_gallery"
                onClick={handleNavItemClick}
                className="hover:text-teal-300 transition-colors"
              >
                {t("navbar.videoGallery")}
              </Link>
            </li> */}
          </ul>

          <div className="flex justify-center gap-4 mt-6 text-xl">
            <SocialLinks />
          </div>

          <div className="flex justify-center mt-4">
            <LanguageSwitcher
              direction={direction}
              setDirection={(dir) => {
                setDirection(dir);
                handleNavItemClick();
              }}
            />
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <span className="text-white font-semibold text-lg hover:text-teal-300">
              Dr Mohamed Sera
            </span>
          </Link>

          <ul className="flex gap-6 text-white text-sm font-medium">
            <li>
              <Link
                to="/"
                onClick={handleNavItemClick}
                className="hover:text-teal-300 transition-colors"
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact_us"
                onClick={handleNavItemClick}
                className="hover:text-teal-300 transition-colors"
              >
                {t("navbar.contact")}
              </Link>
            </li>
            <li>
              <Link
                to="/about_us"
                onClick={handleNavItemClick}
                className="hover:text-teal-300 transition-colors"
              >
                {t("navbar.about")}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 text-xl">
            <SocialLinks />
            <LanguageSwitcher
              direction={direction}
              setDirection={setDirection}
            />
          </div>
        </div>
      </section>
    </nav>
  );
};

// Social Icons
const SocialLinks = () => (
  <>
    <Link
      to="https://www.facebook.com/DrMohamedsera"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fab fa-facebook-f text-blue-500 hover:text-blue-400" />
    </Link>
    <Link
      to="https://www.instagram.com/dr.mohamed_sera/"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fab fa-instagram text-pink-500 hover:text-pink-400" />
    </Link>
    <Link
      to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fab fa-linkedin-in text-blue-400 hover:text-blue-300" />
    </Link>
    <Link
      to="https://www.youtube.com/@yehiasera"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fab fa-youtube text-red-500 hover:text-red-400" />
    </Link>
    <WhatsappButton />
  </>
);

Navbar.propTypes = {
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};

export default Navbar;
