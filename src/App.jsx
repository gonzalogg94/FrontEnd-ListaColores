import {Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import FormularioColores from "./components/FormularioColores";
function App() {
  return (
    <Container className='my-5 text-center'>
      <div  className="text-center">
      <h1  className='fs-1'>Elegir colores</h1>
      <hr />
      </div>
      <FormularioColores></FormularioColores>
    </Container>
  );
}

export default App;
