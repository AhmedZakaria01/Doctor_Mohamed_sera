import { useTranslation } from "react-i18next";
import dr_mohamed_img from "../../src/assets/home_bg small-1.png";
const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const clinicImages = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-blue-600 p-2 rounded-full"></div>
              <h1 className="text-2xl font-bold text-gray-800">
                {t("about.clinicName")}
              </h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                {t("Contact Us")}
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                {t("Chat on WhatsApp")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Profile */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              {t("Dr Mohamed Sera Clinic")}
            </h2>
            <p className="text-blue-100 mt-2">{t("about.slogan")}</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Image */}
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src={dr_mohamed_img}
                    alt={t("about.drName")}
                    className="w-64 h-80 object-cover rounded-2xl shadow-lg mx-auto"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full">
                    <span className="font-semibold">{t("Surgeon")}</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t("about.drName")}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>{t("about.clinicDescription")}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">
                      5000+
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("about.patients")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">15+</div>
                    <div className="text-sm text-gray-600">
                      {t("about.experience")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">98%</div>
                    <div className="text-sm text-gray-600">
                      {t("about.satisfaction")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {/* <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {t("about.galleryTitle")}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clinicImages.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`${t("about.galleryTitle")} ${i + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Info */}
        {/* Contact Info - Clinics */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 mt-12 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("about.contactTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinics Info */}
            {[
              {
                title: t("Helwan Clinic"),
                address: t(
                  "38 Mohamed Sayed Ahmed St, above Gad Restaurant, First Floor"
                ),
                phone: "01010403800",
              },
              {
                title: t("Maadi Clinic"),
                address: t(
                  "11 El Nasr St, Baskltah Bldg, above Mo'men & Carrier, 2nd Floor"
                ),
                phone: "01050505342",
              },
              {
                title: t("The 5th Settlement Clinic"),
                address: t(
                  "Cairo Medical Center, 90th St, 2nd Floor, Clinic 203"
                ),
                phone: "01050505342",
              },
              {
                title: t("October Clinic"),
                address: t(
                  "Cairo Medical Center, Central Axis, G7 Clinic, Ground Floor"
                ),
                phone: "01050505342",
              },
            ].map((clinic, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-4 shadow-md">
                <h4 className="text-xl font-bold mb-2">{clinic.title}</h4> 
                <div className="flex gap-3 justify-center">
                  <a
                    href={`tel:${clinic.phone}`}
                    className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
                  >
                    {t("Call Now")}
                  </a>
                  <a
                    href={`https://wa.me/2${clinic.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    {t("WhatsApp")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
