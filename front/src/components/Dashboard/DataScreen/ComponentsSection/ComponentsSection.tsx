import "./ComponentsSection.scss";
import { useTypewriter } from "react-simple-typewriter";

const ComponentsSection = () => {
  const [text] = useTypewriter({
    words: ["Hi, Jack Black!!!"],
    loop: false,
    typeSpeed: 120,
  });

  return (
    <div className="components-section-main-box">
      <div className="components-section-content-wrapper">
        <span className="user-name">{text}</span>
      </div>
    </div>
  );
};

export default ComponentsSection;
