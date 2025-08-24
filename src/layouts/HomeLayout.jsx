import { Outlet, NavLink, Link } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import Button from "../components/Button";


const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
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
              <li onClick={toggleDropdown} className="toggle">
                <Link to="/features">
                  <div className="nav-link">
                    <span>Features</span>
                    <span className="icon">
                      {isOpen ? <GoChevronUp /> : <GoChevronDown />}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/docs">Documentation</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/qr-creator">Free QR Code Creator</Link>
              </li>
              <li>
                <li onClick={toggleDropdown} className="toggle">
                  <Link to="/features">
                    <div className="nav-link">
                      <span> Other Products</span>
                      <span className="icon">
                        {isOpen ? (
                          <GoChevronUp style={{ color: "black" }} />
                        ) : (
                          <GoChevronDown style={{ color: "black" }} />
                        )}
                      </span>
                    </div>
                  </Link>
                </li>
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

      <main>
        {/* RENDER THE NESTED ROUTE COMPONENTS */}
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
