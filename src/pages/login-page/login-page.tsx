import { GrowingSection, LoginFormSection } from "../../sections";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const LoginPage = () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <LoginFormSection />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <GrowingSection />
        </Col>
      </Row>
    </>
  );
};
