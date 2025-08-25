import { GoChevronDown, GoChevronUp } from "react-icons/go";

const NavLinks = ({ onOpen, children, id, setOpen }) => {
    const curOpen = id === onOpen;

    const handleToggle = () => {
       setOpen(curOpen ? null : id);
    }
  return (
    <div onClick={handleToggle}>
      <div className="nav-link">
        <span>{children}</span>
        <span className="icon">
          {curOpen ? <GoChevronUp /> : <GoChevronDown />}
        </span>
      </div>
      
      {/* {
        curOpen && (
          <ul className="dropdown">
            <FeatureDropDown icon="🔍" featuresTitle="Search" />
            <FeatureDropDown icon="📊" featuresTitle="Analytics" />
            <FeatureDropDown icon="🔗" featuresTitle="Custom Links" />
            <FeatureDropDown icon="📱" featuresTitle="QR Codes" />
            <FeatureDropDown icon="🤝" featuresTitle="Team Collaboration" />
            <FeatureDropDown icon="🔌" featuresTitle="Webhooks" />
          </ul>)
      } */}
    </div>
  );
};

export default NavLinks;
