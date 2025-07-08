import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import WhatsappButton from "../Components/WhatsappButton";
import CallButton from "../Components/CallButton";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const clinics = [
    {
      title: t("Helwan Clinic"),
      address: t(
        "38 Mohamed Sayed Ahmed St, above Gad Restaurant, First Floor"
      ),
      phone: "01010403800",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3460.588932995025!2d31.328282075546237!3d29.847284975023534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDUwJzUwLjIiTiAzMcKwMTknNTEuMSJF!5e0!3m2!1sen!2seg!4v1751970265497!5m2!1sen!2seg",
    },
    {
      title: t("Maadi Clinic"),
      address: t(
        "11 El Nasr St, Baskltah Bldg, above Mo'men & Carrier, 2nd Floor"
      ),
      phone: "01050505342",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.117605587315!2d31.280801075551157!3d29.97604997495811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzMzLjgiTiAzMcKwMTcnMDAuMiJF!5e0!3m2!1sen!2seg!4v1751970295205!5m2!1sen!2seg",
    },
    {
      title: t("The 5th Settlement Clinic"),
      address: t("Cairo Medical Center, 90th St, 2nd Floor, Clinic 203"),
      phone: "01050505342",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.56449775976!2d31.4338974!3d30.020659000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582335de708375%3A0xb44a4d7ef9e17718!2sCairo%20Medical%20Center%20(CMC)!5e0!3m2!1sen!2seg!4v1751970367500!5m2!1sen!2seg",
    },
    {
      title: t("October Clinic"),
      address: t("Cairo Medical Center, Central Axis, G7 Clinic, Ground Floor"),
      phone: "01050505342",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.833621345643!2d30.915017075550413!3d29.955463974968605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU3JzE5LjciTiAzMMKwNTUnMDMuMyJF!5e0!3m2!1sen!2seg!4v1751970321738!5m2!1sen!2seg",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {t("Contact Us")}
          </h1>
          <p className="text-gray-600">
            {t(
              "Have a question or need to book a consultation? Reach us on WhatsApp directly."
            )}
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t("Quick Contact")}
          </h2>
          <p className="text-gray-600 mb-6">
            {t("Click below to chat with us instantly.")}
          </p>
          <a
            href="https://wa.me/201095521277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-600 transition"
          >
            <WhatsappButton />
            {t("Chat on WhatsApp")}
          </a>
        </div>

        {/* Clinic Info Cards with Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {clinic.title}
              </h3>
              <p className="text-gray-700 mb-2">{clinic.address}</p>
              <p className="text-gray-700 mb-2">
                {t("Phone")}:{" "}
                <span
                  dir="ltr"
                  className="inline-block text-blue-600 font-medium"
                >
                  {clinic.phone}
                </span>
              </p>
              <div className="mt-2 mb-4 flex justify-center">
                <CallButton phone={clinic.phone} />
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden">
                <iframe
                  src={clinic.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${clinic.title} Map`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t("Need More Help?")}</h3>
          <p className="mb-6">{t("We are here to help. Reach out anytime.")}</p>
          <Link
            to="/"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            {t("Home")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
