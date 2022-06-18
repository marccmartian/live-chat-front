import { useEffect, useState } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, FormF } from "./FormElements";
import MyTextInput from "./MyTextInput";
import Loader from "../Loader/Loader";
import api from "../../utils/api";

const loginSchema = Yup.object({
  username: Yup.string()
    .min(3)
    .max(10)
    .required()
    .matches(/^(\S+$)/g, "This field cannot contain blankspaces"),
  password: Yup.string().min(5).max(15).required(),
});

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("chat-user")) navigate("/");
  }, []);

  const handleLoginUser = async (data) => {
    setLoading(true);

    try {
      const response = await api.post("/auth/login", data);
      const { message, user, token } = response.data;
      toast.success(`${message}`);
      localStorage.setItem("chat-user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(`${error.response.data.message}`);
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={handleLoginUser}
      >
        <FormF>
          <h1 style={{ fontSize: "1.5rem" }}>Iniciar Sesión 👥</h1>
          <MyTextInput
            label="Usuario"
            name="username"
            type="text"
            placeholder="Nombre de usuario"
          />

          <MyTextInput
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Contraseña"
          />

          <Button type="submit" bgColor={"blue"}>
            Ingresar
          </Button>
          <span>
            Aún NO tienes cuenta? <Link to="/register">Regístrate</Link>{" "}
          </span>
        </FormF>
      </Formik>

      {loading && <Loader />}
    </>
  );
};

export default LoginForm;
