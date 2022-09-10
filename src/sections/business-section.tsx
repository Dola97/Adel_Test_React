import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Points, Achive } from "src/svgs";
import { BusinessCard } from "src/components";
import styles from "./business.module.css";

export const BusinessSection = () => {
  return (
    <>
      <section className={styles.Container}>
        <Points style={{ position: "absolute", left: 0 }} />
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className={styles.myBusinessTxt}>
                My Business <hr className={styles.Line} />
              </p>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} xl={4}>
              <BusinessCard
                icon={<Achive />}
                number={10}
                text={"Satisfied customers"}
              />
              <BusinessCard
                icon={<Achive />}
                number={10}
                text={"Satisfied customers"}
              />
            </Col>

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={3}
              style={{
                position: "relative",
                top: 30,
              }}
            >
              <BusinessCard
                icon={<Achive />}
                number={10}
                text={"Satisfied customers"}
              />
              <BusinessCard
                icon={<Achive />}
                number={10}
                text={"Satisfied customers"}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
