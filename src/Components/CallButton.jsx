// const CallButton = () => {
//   return (
//     <a
//       href="tel:+201050505342 "
//       className=" my-2 sm:w-12 md:w-16 sm:h-12 md:h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center"
//       aria-label="Call us"
//     >
//       <i className="fas fa-phone-alt text-xl -scale-x-100" />
//     </a>
//   );
// };

import PropTypes from "prop-types";

// export default CallButton;
const CallButton = ({ phone }) => {
  return (
    <a
      href={`tel:${phone}`}
      className="my-2 sm:w-12 md:w-16 sm:h-12 md:h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center"
      aria-label="Call us"
    >
      <i className="fas fa-phone-alt text-xl -scale-x-100" />
    </a>
  );
};
CallButton.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default CallButton;
