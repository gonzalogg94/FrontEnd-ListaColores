import ItemColor from "./ItemColor";
import { ListGroup } from "react-bootstrap";

const ListaColores = ({ ArregloColores, borrarColor }) => {
  return (
    <ListGroup>
      {ArregloColores.map((color, posicion) => (
        <ItemColor
          key={posicion}
          nombreColor={color}
          borrarColor={borrarColor}
        ></ItemColor>
      ))}
    </ListGroup>
  );
};

export default ListaColores;
