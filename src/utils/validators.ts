import { object, string, boolean } from "yup";

export const formSchema = object({
  nombre: string().required("El nombre es obligatorio."),
  email: string().required("El email se obligatorio."),
  password: string().required("El password es obligatorio."),
  confirmar: boolean().required("El campo es obligatorio."),
  apellido: string().required("El apellido es obligatorio."),
  esSuperAdmin: boolean().required("El campo es obligatorio."),
  telefono: string().required("El teléfono es obligatorio."),
  cargo: string().required("El cargo es obligatorio."),
});
