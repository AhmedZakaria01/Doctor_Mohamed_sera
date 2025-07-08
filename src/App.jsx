// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import PhotoGallery from "./Pages/PhotoGallery";
import VideoGallery from "./Pages/VideoGallery";
import { useEffect, useState } from "react";
import i18n from "./i18n";
import WhatsappButton from "./Components/WhatsappButton"; // 👈 Import the button
import CallButton from "./Components/CallButton";
import NotFound from "./Pages/NotFound";
import AnalFissureSurgery from "./Components/AnalFissureSurgery";
import HemorrhoidSurgery from "./Components/HemorrhoidSurgery";
import IngrownToenailSurgery from "./Components/IngrownToenailSurgery";
import LaparoscopicSurgeries from "./Components/LaparoscopicSurgeries";
import MinimallyInvasiveSurgeries from "./Components/MinimallyInvasiveSurgeries";
import ColonSurgeries from "./Components/ColonSurgeries";

const App = () => {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setDirection(lang === "ar" ? "rtl" : "ltr");
  }, []);

  return (
    <div style={{ direction: direction }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout direction={direction} setDirection={setDirection} />
            }
          >
            <Route index element={<Home />} />
            <Route path="contact_us" element={<ContactUs />} />
            <Route path="services" element={<Services />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="photo_gallery" element={<PhotoGallery />} />
            <Route path="video_gallery" element={<VideoGallery />} />
            {/* surgeries */}
            <Route path="AnalFissureSurgery" element={<AnalFissureSurgery />} />
            <Route path="HemorrhoidSurgery" element={<HemorrhoidSurgery />} />
            <Route
              path="IngrownToenailSurgery"
              element={<IngrownToenailSurgery />}
            />
            <Route
              path="LaparoscopicSurgeries"
              element={<LaparoscopicSurgeries />}
            />{" "}
            <Route
              path="MinimallyInvasiveSurgeries"
              element={<MinimallyInvasiveSurgeries />}
            />{" "}
            <Route path="ColonSurgeries" element={<ColonSurgeries />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>

      {/* ✅ Floating WhatsApp Button */}
      <div className="fixed bottom-5 left-2  z-[9999]">
        <CallButton phone={"201095521277"} />

        <WhatsappButton float={"true"} />
      </div>
    </div>
  );
};

export default App;
