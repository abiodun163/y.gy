import { NavLink } from "react-router-dom";

const FeatureDropDown = ({ icon, featuresTitle, img, menuTitle, menuBody }) => {
  return (
    <div>
        <li className={img ? "shorter-width" : ""}>
          <div className="dropdown-nav">
            {/* <NavLink to="/"> */}
              {icon ? (
                <div className="features-menu">
                  <span>{icon}</span>
                  <span>{featuresTitle}</span>
                </div>
              ) : null}

              {img ? (
                <>
                  <div className="products-menu">
                    <div className="products-menu-img">
                      <img src={img} alt={menuTitle} />
                    </div>
                    <div className="products-menu-detail">
                      <div className="menu-detail-title">{menuTitle}</div>
                      <p className="menu-detail-body">{menuBody}</p>
                    </div>
                  </div>
                </>
              ) : null}
            {/* </NavLink> */}
          </div>
        </li>
    </div>
  );
};

export default FeatureDropDown;
