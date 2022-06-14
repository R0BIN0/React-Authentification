// General
import { FC } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Layout.css";

// Images
import Logo from "../../assets/images/Logo.png";

// Components
import InputComponent from "../Input/Input";

// Types
import { FormData, Input } from "../../config/types";

type Props = {
  formTemplate: Input[];
};

const Layout: FC<Props & FormData> = ({ data, setData, formTemplate }) => {
  return (
    <div className="container-grid">
      <div className="container-grid-left">
        <div className="container-grid-left-bg">
          <div className="logo-container-left">
            <img src={Logo} alt="Logo de l'entreprise" />
          </div>
          <div className="txt-container-left">
            <span>89%</span>
            <p>time saved in total compared to project not using Hub</p>
          </div>
          <div className="background-container"></div>
        </div>
      </div>
      <div className="container-grid-right">
        <div className="container-grid-right-wrapper">
          <h1 className="title-container">Set up your Hub account.</h1>
          <p className="subtitle-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab
            velit accusantium? Voluptate, inventore non.
          </p>
          <form>
            <div className="input-container">
              {formTemplate.map((item) => (
                <InputComponent {...item} data={data} setData={setData} />
              ))}
            </div>
            <div className="terms-container">
              <input type="checkbox" />
              <p>
                I agree with Hub's <Link to="/">Terms</Link>,{" "}
                <Link to="/">Privacy Policy</Link> and{" "}
                <Link to="/signin">E-Sign</Link> consent.
              </p>
            </div>
            <div className="button-container">
              <button type="submit">Continue</button>
            </div>
          </form>
          <div className="switch-page">
            <p>
              Already have an account ? <a href="/">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
