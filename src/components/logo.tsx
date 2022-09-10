import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}
export const Logo: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Link to="/"> {children}</Link>
    </>
  );
};
