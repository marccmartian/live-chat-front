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

const registerSchema = Yup.object({
  username: Yup.string()
    .min(3)
    .max(10)
    .required()
    .matches(/^(\S+$)/g, "This field cannot contain blankspaces"),
  fullname: Yup.string().min(5).max(30).required(),
  password: Yup.string().min(5).max(15).required(),
});

const registerInitialValues = {
  username: "",
  fullname: "",
  password: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("chat-user")) navigate("/");
  }, []);

  const handleRegisterUser = async (data) => {
    setLoading(true);

    try {
      const response = await api.post("/users", data);
      const { newUser } = response.data;
      toast.success(`${newUser.username} created successfully`);
      localStorage.setItem("chat-user", JSON.stringify(newUser));
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(`${error.response.data.errors[0].msg}`);
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerSchema}
        onSubmit={handleRegisterUser}
      >
        <FormF>
          <h1 style={{ fontSize: "1.5rem" }}>Regístrate 👥</h1>
          <MyTextInput
            label="Usuario"
            name="username"
            type="text"
            placeholder="Nombre de usuario"
          />

          <MyTextInput
            label="Nombre"
            name="fullname"
            type="text"
            placeholder="Tu nombre completo"
          />

          <MyTextInput
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Contraseña"
          />

          <Button type="submit" bgColor={"blue"}>
            Resgistrar
          </Button>
          <span>
            Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>{" "}
          </span>
        </FormF>
      </Formik>

      {loading && <Loader />}
    </>
  );
};

export default RegisterForm;
