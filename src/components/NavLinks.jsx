import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import FeatureDropDown from "../pages/FeatureDropDown";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";

const NavLinks = ({  children, id, img }) => {
    const [open, setOpen] = useState(false);
  const [manualToggle, setManualToggle] = useState(false);

  const handleMouseEnter = () => {
    if (!manualToggle) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!manualToggle) setOpen(false);
  };
  const curOpen = id === open;

  const handleToggle = () => {
    setOpen(curOpen ? false : id);
  };

  return (
    <li className="toggle nav-list" onMouseEnter={handleToggle} onMouseLeave={handleMouseLeave} onClick={handleToggle}>
      <div className="nav-item" >
        <div className="nav-link">
          <span>{children}</span>
          <span className="icon">
            {curOpen ? <GoChevronUp /> : <GoChevronDown />}
          </span>
        </div>
        {curOpen && (
          <ul
            className={`dropdown ${img ? "right-position" : "left-position"}`}
          >
            {!img ? (
              <>
                <FeatureDropDown
                  icon="📊"
                  featuresTitle="Analytics"
                  nav="analytics"
                />
                <FeatureDropDown
                  icon="🔗"
                  featuresTitle="Custom Links"
                  nav="custom-links"
                />
                <FeatureDropDown
                  icon="📱"
                  featuresTitle="QR Codes"
                  nav="qr-codes"
                />
                <FeatureDropDown
                  icon="🤝"
                  featuresTitle="Team Collaboration"
                  nav="collaboration"
                />
                <FeatureDropDown
                  icon="🔌"
                  featuresTitle="Webhooks"
                  nav="integration"
                />
              </>
            ) : (
              <>
                <FeatureDropDown
                  img={img1}
                  menuTitle="new.website"
                  menuBody="Amazing AI Website Generator"
                />
                <FeatureDropDown
                  img={img2}
                  menuTitle="waitlist"
                  menuBody="Quick and Easy Waitlist with Built-in Referrals"
                />
                <FeatureDropDown
                  img={img3}
                  menuTitle="LilSurvey"
                  menuBody="Stunning Survey That Converts"
                />
              </>
            )}
          </ul>
        )}
      </div>
    </li>
  );
};

export default NavLinks;




