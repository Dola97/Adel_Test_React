import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { MenuItem } from "./nav-item";
import { Hamburger, Logo, Search } from "src/svgs";
import "./header.css";
import { Logo as LogoComponent } from "./logo";
export const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  let CustomContainer = isNavExpanded ? Fragment : Container;

  return (
    <CustomContainer>
      <header className="navigation">
        <LogoComponent children={<Logo />} />

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Hamburger />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <MenuItem to={"/"} children="Home" />
            </li>
            <li>
              <MenuItem to={"/About"} children="About Me" />
            </li>
            <li>
              <MenuItem to={"/Service"} children="Service" />
            </li>
            <li>
              <MenuItem to={"/Contact"} children="Contact" />
            </li>
          </ul>
        </div>
        <button
          className={"searchButton"}
          onClick={() => {
            console.log("");
          }}
        >
          <Search />
        </button>
      </header>
    </CustomContainer>
  );
};
