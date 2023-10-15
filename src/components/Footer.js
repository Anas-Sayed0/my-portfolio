import { Container, Row, Col } from "react-bootstrap";
import brand from "../assets/img/anas-high-resolution-logo-color-on-transparent-background (1).png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={brand} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anas-sayed-950429245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/anas.sayed.710?mibextid=ZbWKwL">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://instagram.com/anas_9_sayed?igshid=OGQ5ZDc2ODk2ZA==">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://github.com/Anas-Sayed0">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
