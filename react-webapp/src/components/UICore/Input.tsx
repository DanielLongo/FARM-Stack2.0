import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  value?: string;
}

const Input: FC<InputProps> = ({ label, inputClassName, value, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-1 text-gray-500 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow duration-200 ${inputClassName}`}
        value={value}
      />
    </div>
  );
};

export default Input;
