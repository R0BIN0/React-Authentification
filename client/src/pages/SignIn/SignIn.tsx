// General
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./SignIn.css";

// Components
import Layout from "../../component/Layout/Layout";

// Types
import { Connexion, Input, LayoutData } from "../../config/types";

// Hooks
import useAuthentification from "../../hooks/useAuthentification";

// Data

const pageData: LayoutData = {
  number: "98%",
  number_desc:
    "De nos utilisateurs sont entièrement satisfaits du service proposé",
  title: "Connectez-vous à la vitesse de la lumière 🚀",
  subtitle:
    "Nos responsables sont disponibles 24h/24 et ce 7j/7 pour répondre à toutes vos questions et vous accompagner dans toutes vos démarches numériques, ce serait dommage de s'en priver..",
  switch_txt: "Vous n'avez pas encore de compte ?",
  switch_link: "S'enregistrer",
  href: "/",
};

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
  const { sendAuthentification } = useAuthentification();

  const [formData, setFormData] = useState<Connexion>({
    name: "",
    password: "",
  });

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    sendAuthentification("/api/v1/login", formData);
  };

  return (
    <Layout
      pageData={pageData}
      data={formData}
      setData={setFormData}
      formTemplate={formTemplate}
      formHandler={formHandler}
    />
  );
}
