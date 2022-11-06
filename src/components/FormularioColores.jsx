import ListaColores from "./ListaColores";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultarAPI, crearTareaAPI } from "./helpers/queries";
import { useForm } from "react-hook-form";

const FormularioColores = () => {
  const [color, setColores] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setColores(respuesta);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreTarea: "",
    },
  });

  const onSubmit = (datos) => {
    crearTareaAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        reset();
        consultarAPI().then((respuesta) => {
          setColores(respuesta);
        });
      } else {
        console.log("la tarea no ha sido creada");
      }
    });
  };

  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            className="mb-3 row justify-content-center"
            controlId="formBasicEmail"
          >
            <aside className="col-10">
              <Form.Control
                type="color"
                placeholder="Ingrese una tarea"
                {...register("color", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe ingresar como minimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar como maximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreTarea?.message}
              </Form.Text>
            </aside>
            <aside className=" col-2">
              <Button variant="warning" type="submit">
                Enviar
              </Button>
            </aside>
          </Form.Group>
        </Form>
      </div>
      <ListaColores color={color} setColores={setColores}></ListaColores>
    </div>
  );
};

export default FormularioColores;
