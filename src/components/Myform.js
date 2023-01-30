import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeParas, changeType } from "../redux/random/randomSlice";

export default function Myform() {
  const paras = useSelector((state) => state.random.paras);
  const tip = useSelector((state) => state.random.type);
  const dispatch = useDispatch();
  const paragraf = (e) => {
    dispatch(changeParas(e.target.value))
  }
  const typeChange = (e) => {
    dispatch(changeType(e.target.value))
  }
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <Form.Label htmlFor="inputParagraph">Paragraph Count</Form.Label>
            </Col>
            <Col>
              <Form.Control
                id="inputParagraph"
                size="sm"
                type="number"
                placeholder="1"
                value={paras}
                onChange={paragraf}
                min={1}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Label htmlFor="selectHTML">Include HTML?</Form.Label>
            </Col>
            <Col>
              <Form.Select size="sm" id="selectHTML" value={tip} onChange={typeChange}>
                <option value="text">No</option>
                <option value="html">Yes</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
