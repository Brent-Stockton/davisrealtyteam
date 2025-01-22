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
              src="/images/realtor.jpeg"
              className="h-16 w-16 text-white"
              alt="V-partners"
              style={whiteIconStyle}
            />
            <img
              src="/images/exp-logo.png"
              className="h-16 w-16 text-white"
              alt="Realtor"
              style={whiteIconStyle}
            />
          </div>

          {/* Contact Us and Social Links in the center */}
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0 md:w-1/3 justify-center mt-6 text-center md:text-left">
            <p className="text-lg font-bold">Contact Us</p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:davisrealtyteam77@gmail.com"
                className="hover:underline"
              >
                davisrealtyteam77@gmail.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+14808684069" className="hover:underline">
                480-868-4069
              </a>
            </p>
            <div className="flex space-x-4 pt-2">
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
