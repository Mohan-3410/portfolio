import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github";
import wave from "../../img/wave.png";
const Footer = () => {
  const linkedinLink = "https://www.linkedin.com/in/mohan-singh-70106b228";
  const githubLink = "https://github.com/Mohan-3410";
  const instagramLink = "https://www.instagram.com/mohan1034.in/";
  return (
    <div className="footer">
      <img src={wave} alt="wave" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mahan.singh.tomar1034@gmail.com</span>
        <div className="f-icons">
        <a href={githubLink}><Github color="white" size="3rem" /></a>
        <a href={linkedinLink}><LinkedIn color="white" size="3rem" /></a>
        <a href={instagramLink}><Insta color="white" size="3rem" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
