import ListaColores from "./ListaColores";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const FormularioColores = () => {
  const [color, setcolor] = useState("");
  const [ArregloColores, setArregloColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...ArregloColores, color]);
    setcolor("");
  };
  const borrarColor=(nombre)=>{
    let arregloModificado=ArregloColores.filter((item)=>(item!==nombre));
    setArregloColores(arregloModificado);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 px-4 d-flex justify-content-center"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="color"
            placeholder="ingrese un color"
            onChange={(e) => setcolor(e.target.value)}
            value={color}
          />
          <Button className="ms-3" variant="primary" type="submit">
            Enviar color
          </Button>
        </Form.Group>
      </Form>
      <ListaColores ArregloColores={ArregloColores} borrarColor={borrarColor}></ListaColores>
    </div>
  );
};

export default FormularioColores;
