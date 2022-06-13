export type Input = {
  _id: string;
  type: string;
  id: string;
  placeholder: string;
};

export type FormData = {
  formData: Register;
  setFormData: React.Dispatch<React.SetStateAction<Register>>;
};

export type Register = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
