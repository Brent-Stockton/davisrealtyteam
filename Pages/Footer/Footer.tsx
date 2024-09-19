import { siFacebook, siInstagram, siLinkedin } from "simple-icons/icons";

const Footer = () => {
  const whiteIconStyle = { fill: "white" };
  return (
    <footer className="bg-[#ab7552] text-white">
      <div className="max-w-6xl mx-auto px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Images on the left */}
          <div className="flex space-x-4 mb-4 md:mb-0 md:w-1/3 justify-start">
            <img
              src="/images/equal-house-opp.jpeg"
              className="h-16 w-16 text-white"
              alt="equal housing opp"
              style={whiteIconStyle}
            />
            <img
              src="/images/v.jpg"
              className="h-16 w-16 text-white"
              alt="V-partners"
              style={whiteIconStyle}
            />
          </div>

          {/* Social links in the center */}
          <div className="flex space-x-4 mb-4 md:mb-0 md:w-1/3 justify-center mt-6">
            <a
              href="https://www.linkedin.com/in/shain-davis-981a3b93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/svg+xml;utf8,${siLinkedin.svg}`}
                className="h-6 w-6"
                alt="LinkedIn text-white"
                style={whiteIconStyle}
              />
            </a>
            <a
              href="https://www.instagram.com/shoesforsoldiers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/svg+xml;utf8,${siInstagram.svg}`}
                className="h-6 w-6 text-white"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/shoesforsoldiers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/svg+xml;utf8,${siFacebook.svg}`}
                className="h-6 w-6 text-white"
                alt="Facebook"
                style={whiteIconStyle}
              />
            </a>
          </div>

          {/* Address on the right */}
          <div className="text-xs md:text-sm text-center md:text-right md:w-1/3 mt-6">
            <p>20100 N 51st Ave STE E510, Glendale, AZ 85308</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
