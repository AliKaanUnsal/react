import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let productInfo= {title: "Productlist"}
  let categoryInfo= {title: "CategoryList"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3"> 
          <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9"> 
          <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
