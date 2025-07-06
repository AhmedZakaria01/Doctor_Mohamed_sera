import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import WhatsappButton from "../Components/WhatsappButton";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

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

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">
              {t("Clinic Information")}
            </h3>
            <p className="text-gray-700">{t("Dr Mohamed Sera Clinic")}</p>
            <p className="text-gray-700">
              {t("Egypt , Cairo , Helwan - 38 mohamed sayed ahmed ST")}
            </p>
            <p className="text-gray-700">
              {t("Phone")}:{" "}
              <span dir="ltr" className="inline-block">
                +02 010 955 212 77
              </span>
            </p>
            <p className="text-gray-700">
              {t("Email")}:{" "}
              <span dir="ltr" className="inline-block">
                info@clinicname.com
              </span>
            </p>
            <div className="mt-4">
              <h4 className="text-md font-semibold text-blue-700">
                {t("Working Hours")}
              </h4>
              <p className="text-gray-700">
                {t("Saturday - Thursday")}: 9:00 AM - 8:00 PM
              </p>
              <p className="text-gray-700">{t("Friday")}: 2:00 PM - 6:00 PM</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34860.07220155888!2d31.286931144728104!3d29.865577906463418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583698aba63aa5%3A0xecfadb3b079b50df!2z2LnZhdmK2K8g2LfYqNmK2Kgg2KPYs9mG2KfZhiDZhdit2YXYryDYrdiz2YrYqA!5e0!3m2!1sen!2seg!4v1751719839937!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>

        {/* CTA */}
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
