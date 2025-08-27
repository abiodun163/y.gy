import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import DropLinks from "./NavLinks";

const Header = () => {


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
            <DropLinks
              onOpen={open}
              id={1}
            >
              Features
            </DropLinks>
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

            <DropLinks
              onOpen={open}
              id={2}
              img={true}
            >
              Other Products
            </DropLinks>
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

// import React, { useState } from "react";

// function NavigationMenu() {
//   const [open, setOpen] = useState(false);
//   const [manual, setManualToggle] = useState(false);

//   const handleMouseEnter = () => {
//     if (!manualToggle) setOpen(true);
//   };

//   const handleMouseLeave = () => {
//     if (!manualToggle) setOpen(false);
//   };

//   const handleClick = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <nav className="relative">
//       <div
//         className="inline-block"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Top level trigger */}
//         <button
//           onClick={handleClick}
//           className="px-4 py-2 text-gray-700 font-medium hover:text-black"
//         >
//           Features ▼
//         </button>

//         {/* Dropdown */}
//         {open && (
//           <div className="absolute left-0 mt-2 w-[400px] bg-white border rounded-lg shadow-lg">
//             <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               {/* Big card on left */}
//               <li className="row-span-3">
//                 <a
//                   href="/"
//                   className="flex h-full flex-col justify-end rounded-md bg-gradient-to-b from-gray-100 to-gray-50 p-6 no-underline hover:bg-gray-100"
//                 >
//                   <div className="mt-4 mb-2 text-lg font-medium">My UI Kit</div>
//                   <p className="text-gray-500 text-sm leading-tight">
//                     Beautifully designed components built with Tailwind CSS.
//                   </p>
//                 </a>
//               </li>

//               {/* Sub-links */}
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built with React and Tailwind.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, and lists.
//               </ListItem>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// function ListItem({ title, children, href }) {
//   return (
//     <li>
//       <a
//         href={href}
//         className="block rounded-md p-3 hover:bg-gray-100 transition"
//       >
//         <div className="text-sm font-medium leading-none">{title}</div>
//         <p className="text-gray-500 text-sm leading-snug">{children}</p>
//       </a>
//     </li>
//   );
// }

// export default NavigationMenu;
