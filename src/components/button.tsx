import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<Props> = ({
  border,
  color,
  children,
  type = "button",
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};
