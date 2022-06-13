// General
import { FC } from "react";

// Styles
import "./Input.css";

// Types
import { Input, FormData } from "../../config/types";

const InputComponent: FC<Input & FormData> = ({
  type,
  id,
  placeholder,
  formData,
  setFormData,
}) => {
  const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target.getAttribute("id");
    if (target) {
      const newObj = { ...formData, [target]: e.target.value };
      setFormData(newObj);
    }
  };

  return (
    <>
      <input
        className="input-form"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => updateInput(e)}
      />
    </>
  );
};

export default InputComponent;
