import { object, string, boolean, ref } from "yup";

export const formSchema = object({
  nombre: string().required("El nombre es obligatorio."),
  email: string()
    .required("El email se obligatorio.")
    .email("El campo tiene que se un correo electrónico válido."),
  password: string()
    .required("El password es obligatorio.")
    .min(6, "El password no puede ser menor que 6 caracteres"),
  confirmar: string()
    .required("El campo es obligatorio.")
    .oneOf([ref("password")], "El valor de este campo debe ser igual al password"),
  apellido: string().required("El apellido es obligatorio."),
  esSuperAdmin: boolean().required("El campo es obligatorio."),
  telefono: string()
    .required("El teléfono es obligatorio.")
    .min(9, "El teléfono debe tener 9 caracteres")
    .max(9, "El telefono no puede tener mas de 9 caracteres"),
  cargo: string().required("El cargo es obligatorio."),
});
