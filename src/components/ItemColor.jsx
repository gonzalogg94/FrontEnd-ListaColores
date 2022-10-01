import { Button, Card, Col, Row } from "react-bootstrap";

const ItemColor = ({nombreColor,borrarColor}) => {
  return (
    <Row className="py-3">
      <Col>
        <Card  style={{backgroundColor:nombreColor}} >
          <Card.Body>
            <Card.Title>Nombre del color:</Card.Title>
            <Card.Text>
            {nombreColor}
            </Card.Text>
            <Button variant="danger" onClick={()=>borrarColor(nombreColor)}>Borrar</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemColor;
