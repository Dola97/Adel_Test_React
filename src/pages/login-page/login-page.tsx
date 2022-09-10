import { GrowingSection, LoginFormSection } from "../../sections";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fragment } from "react";

export const LoginPage = () => {
  return (
    <Fragment>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xs={12} sm={12} md={6}>
          <LoginFormSection />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <GrowingSection />
        </Col>
      </Row>
    </Fragment>
  );
};
