import { ListGroup, Button } from "react-bootstrap";
import { borrarTareaAPI, consultarAPI } from "../components/helpers/queries";
import Swal from "sweetalert2";

const ItemColor = ({color, setColores}) => {

  const borrarTarea = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el color?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarTareaAPI(color._id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarAPI().then((respuesta) => {
              setColores(respuesta);
            });

            Swal.fire(
              "Tarea eliminada!",
              "La tarea fue correctamnete eliminada.",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error!",
              "Intente realizar esta operacion mas tarde.",
              "error"
            );
          }
        });
      }
    });
  };
  return (
    <ListGroup.Item style={{backgroundColor:color.color}} className="d-flex justify-content-between">
      {color.color}
      <Button variant="danger" onClick={borrarTarea}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemColor;