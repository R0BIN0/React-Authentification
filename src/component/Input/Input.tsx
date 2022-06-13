// General
import { FC } from "react";

// Styles
import "./Input.css";

// Types
import { Input } from "../../config/types";

const InputComponent: FC<Input> = ({ type, id, placeholder }) => {
  return (
    <>
      <input
        className="input-form"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputComponent;
