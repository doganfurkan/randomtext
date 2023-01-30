import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Myform from "./components/Myform";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>React Sample Text Generator</h1>
          </Col>
        </Row>
        <Row>
          <Myform />
        </Row>
        <Row>
          <Col>
            <Result />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
