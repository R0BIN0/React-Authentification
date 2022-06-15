// General
import { FC } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Layout.css";

// Components
import InputComponent from "../Input/Input";

// Types
import { FormData, Input, LayoutData } from "../../config/types";
import Button from "../Button/Button";

type Props = {
  pageData: LayoutData;
  formTemplate: Input[];
};

const Layout: FC<Props & FormData> = ({
  data,
  setData,
  formTemplate,
  pageData,
}) => {
  return (
    <div className="container-grid">
      <div className="container-grid-left">
        <div className="container-grid-left-bg">
          <div className="txt-container-left">
            <span>{pageData.number}</span>
            <p>{pageData.number_desc}</p>
          </div>
          <div className="background-container"></div>
        </div>
      </div>
      <div className="container-grid-right">
        <div className="container-grid-right-wrapper">
          <h1 className="title-container">{pageData.title}</h1>
          <p className="subtitle-container">{pageData.subtitle}</p>
          <form>
            <div className="input-container">
              {formTemplate.map((item) => (
                <InputComponent
                  key={item._id}
                  {...item}
                  data={data}
                  setData={setData}
                />
              ))}
            </div>
            <div className="terms-container">
              <input type="checkbox" />
              <p>
                Je suis d'accord avec les <Link to="/">Termes</Link>,{" "}
                <Link to="/">Politique de confidentialité</Link> et le
                consentement aux{" "}
                <Link to="/signin">Signatures éléctroniques</Link>.
              </p>
            </div>
            <Button title="Continuer" />
          </form>
          <div className="switch-page">
            <p>
              {pageData.switch_txt}{" "}
              <a href={pageData.href}>{pageData.switch_link}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
