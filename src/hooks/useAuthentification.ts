// General
import { useState } from "react";
import axios from "axios";

// Types
import { Connexion } from "../config/types";

const useAuthentification = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendAuthentification = async (url: string, formData: Connexion) => {
    setLoading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios
        .post(url, formData, config)
        .finally(() => setLoading(false));

      // localStorage.setItem("authToken", data.token);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { sendAuthentification, loading, error };
};

export default useAuthentification;
