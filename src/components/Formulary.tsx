import { formSchema } from "../utils/validators";
import { customAxios } from "../utils/customAxios";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";

import styles from "./Formulary.module.css";

const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ marginBottom: "1rem" }}>{children}</div>;
};

const Formulary = () => {
  const [result, setResult] = useState();
  const [error, setError] = useState<unknown>();

  const handleOnSubmit = (data: unknown) => {
    customAxios
      .post("/api/test/store", {
        data,
      })
      .then((res) => setResult(res.data))
      .catch((err) => setError(err.response.data));
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          password: "",
          confirmar: "",
          apellido: "",
          esSuperAdmin: false,
          telefono: "",
          cargo: "",
        }}
        validationSchema={formSchema}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <FormGroup>
            <label>Nombre</label>
            <Field name="nombre" placeholder="" type="text" />
            <ErrorMessage name="nombre" component="div" className={styles.error} />
          </FormGroup>

          <FormGroup>
            <label>Email</label>
            <Field name="email" placeholder="" type="text" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </FormGroup>

          <FormGroup>
            <label>Password</label>
            <Field name="password" placeholder="" type="password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </FormGroup>

          <FormGroup>
            <label>Confirmar</label>
            <Field name="confirmar" placeholder="" type="password" />
            <ErrorMessage name="confirmar" component="div" className={styles.error} />
          </FormGroup>

          <FormGroup>
            <label>Apellido</label>
            <Field name="apellido" placeholder="" type="text" />
            <ErrorMessage name="apellido" component="div" className={styles.error} />
          </FormGroup>

          <FormGroup>
            <label>¿Es super admin?</label>
            <Field name="esSuperAdmin" placeholder="" type="checkbox" />
            <ErrorMessage name="esSuperAdmin" component="div" className={styles.error} />
          </FormGroup>

          <FormGroup>
            <label>Teléfono</label>
            <Field name="telefono" placeholder="" type="text" />
            <ErrorMessage name="telefono" component="div" className={styles.error} />
          </FormGroup>

          <FormGroup>
            <label>Cargo</label>
            <Field name="cargo" placeholder="" type="text" />
            <ErrorMessage name="cargo" component="div" className={styles.error} />
          </FormGroup>

          <button type="submit">Enviar</button>

          <hr />

          <div>
            <p>Respuesta correcta del servidor:</p>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>

          <div className={styles.error}>
            <p>Respuesta de error del servidor: </p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Formulary;
