import { NavLink } from "react-router-dom";

const FeatureDropDown = ({
  icon,
  featuresTitle,
  img,
  menuTitle,
  menuBody,
  nav,
}) => {
  return (
    <div>
      <NavLink to={icon ? `features/${nav}` : "/"}>
        <li className={img ? "shorter-width" : ""}>
          <div className={img ? "shorter-width" : "dropdown-nav"}>
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
          </div>
        </li>
      </NavLink>
    </div>
  );
};

export default FeatureDropDown;
