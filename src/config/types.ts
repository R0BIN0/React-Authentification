export type Input = {
  _id: string;
  type: string;
  id: string;
  placeholder: string;
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
