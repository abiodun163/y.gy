import { NavLink, Link } from "react-router-dom";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import { useState } from "react";
import Button from "./Button";
import DropLinks from "./NavLinks";
import FeatureDropDown from "../pages/FeatureDropDown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <header>
      <div className="header">
        <h2>
          <NavLink to="/">
            <span className="logo">PR</span>IME
          </NavLink>
        </h2>
        <nav>
          <ul className="nav-links">
            {/* FEATURES AND OTHER PRODUCTS WILL USE A DIFFERENT COMPONENT */}

            <li className=" nav-list">
              <DropLinks onOpen={isOpen} id={1} setOpen={setIsOpen}>
                Features
              </DropLinks>

                <ul className="show dropdown">
                    <FeatureDropDown icon="🔍" featuresTitle="Search" />
                    <FeatureDropDown icon="📊" featuresTitle="Analytics" />
                    <FeatureDropDown icon="🔗" featuresTitle="Custom Links" />
                    <FeatureDropDown icon="📱" featuresTitle="QR Codes" />
                    <FeatureDropDown icon="🤝" featuresTitle="Team Collaboration" />
                    <FeatureDropDown icon="🔌" featuresTitle="Webhooks" />
                </ul>
            </li>
            <li className="nav-list">
              <Link to="/pricing">Pricing</Link>
              
            </li>
            <li className="nav-list">
              <Link to="/docs">Documentation</Link>
            </li>
            <li className="nav-list">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-list">
              <Link to="/qr-creator">Free QR Code Creator</Link>
            </li>
            <li className="nav-list">
                <DropLinks onOpen={isOpen} id={2} setOpen={setIsOpen}>
                  Other Products
                </DropLinks>
                <ul className="show dropdown shorter-width">
                 <FeatureDropDown img={img1} menuTitle="new.website" menuBody="Amazing AI Website Generator" />
                 <FeatureDropDown img={img2} menuTitle="waitlist" menuBody="Quick and Easy Waitlist with Built-in Referrals" />
                 <FeatureDropDown img={img3} menuTitle="LilSurvey" menuBody="Stunning Survey That Converts" />
                </ul>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Button bg="hsl(220, 14%, 96%)" textColor="black">
            Login
          </Button>
          <Button bg="hsl(227, 100%, 50%)" textColor="white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
