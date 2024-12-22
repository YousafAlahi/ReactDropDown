import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    cName: "nav-item",
  },
  {
    id: 2,
    title: "Services",
    path: "./services",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "Products",
    path: "./products",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "./contactus",
    cName: "nav-item",
  },
];

const Navbar = () => {

const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Nature
        <FaHome />
      </Link>

      <ul className="navbar-items">
        {navItems.map((item) => {
          if(item.title === "Services"){
            return (
            <li key={item.id} className={item.cName}
             onMouseEnter={() => setDropdown(true)}
             onMouseLeave={() => setDropdown(false)}>
              <Link to={item.id}
              //  onMouseEnter={() => setDropdown(true)}
              //  onMouseLeave={() => setDropdown(false)}
              >{item.title}</Link>
              {dropdown && <Dropdown/>}
            </li>
          );
          }
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.id}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button className="border-none py-2 px-4 bg-cyan-700 rounded-lg text-white font-semibold hover:text-cyan-700 hover:bg-white transition-all">
        SignUp
      </button>
      {/* <Dropdown/> */}
    </nav>
    
  );
};

export default Navbar;
