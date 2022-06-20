// Styles
import "./PrivateContent.css";

// Components
import Button from "../../component/Button/Button";

export default function PrivateContent() {
  return (
    <div className="private-container">
      <p>
        Vous êtes connecté sous le pseudo : <strong>Robin</strong>
      </p>
      <Button title="Se déconnecter" />
    </div>
  );
}
