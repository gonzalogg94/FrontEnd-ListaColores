
import { Button, ListGroup} from "react-bootstrap";

const ItemColor = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            Color de prueba 
            <Button variant="danger">Borrar</Button>
            </ListGroup.Item>
    );
};

export default ItemColor;