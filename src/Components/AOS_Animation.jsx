import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AOS_Animation() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
}

export default AOS_Animation;
