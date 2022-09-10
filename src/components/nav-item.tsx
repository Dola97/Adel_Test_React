import { NavLink } from "react-router-dom";
import React from "react";
import "./header.css";
interface Props {
  children?: React.ReactNode;
  to: string;
}
export const MenuItem: React.FC<Props> = ({ children, to = "/", ...rest }) => {
  return (
    <NavLink
      {...rest}
      className={({ isActive }) =>
        isActive ? "activeClassName" : "nonactiveClassName"
      }
      end
      to={to}
    >
      {children}
    </NavLink>
  );
};
