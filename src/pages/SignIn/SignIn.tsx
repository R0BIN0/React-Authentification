// General
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./SignIn.css";

// Components
import Layout from "../../component/Layout/Layout";

// Types
import { Connexion, Input } from "../../config/types";

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
    type: "password",
    id: "password",
    placeholder: "Mot de passe",
  },
];

export default function SignIn() {
  const [formData, setFormData] = useState<Connexion>({
    name: "",
    password: "",
  });

  return (
    <Layout data={formData} setData={setFormData} formTemplate={formTemplate} />
  );
}
