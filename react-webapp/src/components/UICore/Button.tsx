import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  primary?: boolean;
  secondary?: boolean;
}

const Button: FC<ButtonProps> = ({ text, primary, secondary, ...props }) => {
  let buttonClass = " py-2 px-4 rounded-md";
  if (primary) {
    buttonClass += " bg-blue-800 text-white hover:bg-blue-900";
  } else if (secondary) {
    buttonClass += " border text-gray-700 hover:bg-gray-200";
  }
  return (
    <button className={buttonClass} {...props}>
      {text}
    </button>
  );
};

export default Button;
