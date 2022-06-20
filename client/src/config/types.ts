export type Input = {
  _id: string;
  type: string;
  id: string;
  placeholder: string;
};

export type LayoutData = {
  number: string;
  number_desc: string;
  title: string;
  subtitle: string;
  switch_txt: string;
  switch_link: string;
  href: string;
};

export type Connexion = Register | Login;

export type FormData = {
  data: Connexion;
  setData: React.Dispatch<React.SetStateAction<Connexion>>;
};

export type Register = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type Login = {
  name: string;
  password: string;
};
