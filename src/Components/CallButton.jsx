const CallButton = () => {
  return (
    <a
      href="tel:+201095521277"
      className=" my-2 w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center"
      aria-label="Call us"
    >
      <i className="fas fa-phone-alt text-xl -scale-x-100" />
    </a>
  );
};

export default CallButton;
