import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  containerStyle: string | undefined;
  lableStyle: string | undefined;
}

export const Input: FC<InputProps> = ({
  name,
  label,
  containerStyle,
  lableStyle,
  ...rest
}) => {
  return (
    <div className={containerStyle}>
      <label className={lableStyle} htmlFor={name}>
        {label}
      </label>
      <input id={name} {...rest} />
    </div>
  );
};
