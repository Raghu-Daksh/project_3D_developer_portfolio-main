import { useEffect, useState } from "react";
import { ArrowDownCircle } from "lucide-react";

const ScrollButton = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero-section").offsetHeight;
      setShow(window.scrollY < heroHeight - 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="scroll-btn-modern"
      onClick={() => {
        document.getElementById("about-section").scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <ArrowDownCircle className="icon-glow" />
    </button>
  );
};

export default ScrollButton;
