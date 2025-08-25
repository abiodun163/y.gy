import { GoChevronDown, GoChevronUp } from "react-icons/go";
import FeatureDropDown from "../pages/FeatureDropDown";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";

const NavLinks = ({ onOpen, children, id, setOpen, img }) => {
  const styles = {
    position: "absolute",
  };
  if (!img) {
    styles.left = 0;
  } else {
    styles.left = 0;
  }
  const curOpen = id === onOpen;

  const handleToggle = () => {
    setOpen(curOpen ? null : id);
  };
  return (
    <div className="nav-item" onClick={handleToggle}>
      <div className="nav-link">
        <span>{children}</span>
        <span className="icon">
          {curOpen ? <GoChevronUp /> : <GoChevronDown />}
        </span>
      </div>

      {/* <ul className={`dropdown ${img ? "right-position" : "left-position"}`}>
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
      </ul> */}
      {curOpen && (
        <ul className={`dropdown ${img ? "right-position" : "left-position"}`}>
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
  );
};

export default NavLinks;
