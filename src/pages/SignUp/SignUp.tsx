// General
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Styles
import "./SignUp.css";

// Components
import Layout from "../../component/Layout/Layout";

// Types
import { Connexion, Input, LayoutData } from "../../config/types";

// Data

const pageData: LayoutData = {
  number: "632",
  number_desc:
    "clients nous font confiance pour la gestion de leurs logiciels informatiques",
  title: "Rejoignez-nous sans plus attendre !",
  subtitle:
    "C'est avec une gestion inégalable de votre parc numérique que nous rayonnons et que nous vous aidons à en faire de même !",
  switch_txt: "Vous avez déjà un compte ?",
  switch_link: "Se connecter",
  href: "/signin",
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
    <Layout
      pageData={pageData}
      data={formData}
      setData={setFormData}
      formTemplate={formTemplate}
    />
  );
}
