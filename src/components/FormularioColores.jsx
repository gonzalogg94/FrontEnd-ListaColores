import ListaColores from "./ListaColores";
import { Form, Button } from "react-bootstrap";

const FormularioColores = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 px-4 d-flex justify-content-center" controlId="formBasicEmail">
          <Form.Control type="color" placeholder="ingrese un color" />
          <Button variant="primary" type="submit">
            Enviar color
          </Button>
        </Form.Group>
      </Form>
      <ListaColores></ListaColores>
    </div>
  );
};

export default FormularioColores;
