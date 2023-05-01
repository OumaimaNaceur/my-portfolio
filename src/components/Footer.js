import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img
              src={logo}
              style={{ width: "75px", height: "75px" }}
              alt='Logo'
            />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/oumaima-naceur-8a5a81226/'>
                <img src={navIcon1} alt='' />
              </a>
              <a href='https://www.facebook.com/oumeyma.naceur'>
                <img src={navIcon2} alt='' />
              </a>
              <a href='https://www.instagram.com/oumeyma.naceur/'>
                <img src={navIcon3} alt='' />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
