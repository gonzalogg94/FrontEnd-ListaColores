
import ItemColor from "./ItemColor";
import ListGroup from "react-bootstrap/ListGroup";

const ListaColores = ({ color, setColores }) => {
  return (
    <ListGroup>
      {color.map((color) => (
        <ItemColor
          key={color._id}
          color={color}
          setColores={setColores}
        ></ItemColor>
      ))}
    </ListGroup>
  );
};

export default ListaColores;

