// General
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./SignUp.css";

// Components
import Layout from "../../component/Layout/Layout";

// Types
import { Input, Connexion } from "../../config/types";

// Data

const formTemplate: Input[] = [
  {
    _id: uuidv4(),
    type: "text",
    id: "name",
    placeholder: "Nom",
  },
  {
    _id: uuidv4(),
    type: "email",
    id: "email",
    placeholder: "Email",
  },
  {
    _id: uuidv4(),
    type: "password",
    id: "password",
    placeholder: "Mot de passe",
  },
  {
    _id: uuidv4(),
    type: "password",
    id: "confirmPassword",
    placeholder: "Confirmation du mot de passe",
  },
];

export default function SignUp() {
  const [formData, setFormData] = useState<Connexion>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Layout data={formData} setData={setFormData} formTemplate={formTemplate} />
  );
}
