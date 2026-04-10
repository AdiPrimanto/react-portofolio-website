import CV from "../../assets/CV_New_ADI_PRIMANTO.pdf";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BsSend } from "react-icons/bs";

const CTA = () => {
  return (
    <div className="cta header__animate">
      <a href={CV} download className="btn btn-outline">
        <HiOutlineDocumentDownload />
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        <BsSend />
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
