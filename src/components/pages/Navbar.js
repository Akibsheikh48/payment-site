import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closemobileMenu = () => setClick(false);

  const showButon = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButon();
  }, []);

  window.addEventListener("resize", showButon);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar_container container">
          <Link to="/" className="navbar_logo" onClick={closemobileMenu}>
            <MdFingerprint className="navbar_icon" />
            AKIB
          </Link>
          <div className="menu_icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav_menu active" : "nav_menu"}>
            <li className="nav_item">
              <Link to="/" className="nav_links" onClick={closemobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/services"
                className="nav_links"
                onClick={closemobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/products"
                className="nav_links"
                onClick={closemobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav_btn">
              {button ? (
                <Link to="/sing_up" classname="btn_link">
                  <Button buttonStyle="btn__outline">Sing UP</Button>
                </Link>
              ) : (
                <Link
                  to="/sing_up"
                  classname="btn_link"
                  onClick={closemobileMenu}
                >
                  <Button buttonStyle="btn__outline" buttonSized="btn__mobile">
                    Sing UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
