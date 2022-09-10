import { SocialLinks, Brands, TextHero, SocialLinkH } from "src/components";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import HeroOne from "../images/heroFirst.png";
import HeroTwo from "../images/heroTwo.png";
import styles from "./hero.module.css";
export const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={6}>
            <div className={styles.ColOne}>
              <TextHero />
            </div>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
          >
            {/* <div className={styles.BackGround} /> */}
            <div>
              <Image
                className={styles.ImageStyle}
                src={HeroOne}
                alt="Hero FirstImage"
              />
              <SocialLinkH />
            </div>
            <Image
              className={styles.ImageStyleTwo}
              src={HeroTwo}
              alt="Hero FirstImage"
            />
            <SocialLinks />
          </Col>
        </Row>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Brands />
      </div>
    </section>
  );
};
