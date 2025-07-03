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
const App = () => {
  const [direction, setDirection] = useState("ltr");
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
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
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
