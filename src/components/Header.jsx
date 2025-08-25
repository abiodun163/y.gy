import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import DropLinks from "./NavLinks";

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
              <DropLinks onOpen={isOpen} id={2} setOpen={setIsOpen} img={true}>
                Other Products
              </DropLinks>
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
