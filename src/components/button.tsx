import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick?: any;
  radius: string;
  width: string;
  type: "button" | "submit" | "reset" | undefined;
  className?: string | undefined;
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
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      {...rest}
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
