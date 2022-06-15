// General
import { FC } from "react";

// Styles
import "./Button.css";

// Types

type Props = {
  title: string;
};

const Button: FC<Props> = ({ title }) => {
  return (
    <div className="button-container">
      <button type="submit">{title}</button>
    </div>
  );
};

export default Button;
