import React, { useState, FC } from "react";

interface CheckboxProps {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  defaultChecked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 "
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="text-md">{label}</span>
    </label>
  );
};

export default Checkbox;
