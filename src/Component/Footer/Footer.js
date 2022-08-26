import React, { Component } from "react";
import { Row, Container, Col } from 'react-bootstrap';
import footerlogo from '../../assets/images/footer-logo.png';
import map from '../../assets/images/map.jpg';

class Footer extends Component {
  render() {
    return <div className="footer-main">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="footer-logo-sec">
              <img src={footerlogo} alt="Logo" />
            </div>
            <p>Equitas IT INC combines deep technology, staffing knowledge & long-term experience to create talent solutions to increase teams’ efficiency & agility, resulting in faster time-to-market and operational cost savings.</p>
          </Col>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={7}>
            <Row>
              <Col xs={12} md={6}>
                <h2>Located Us</h2>
                <p className="footeraddress">4645 Avon LN 285 Frisco, TX 75033</p>
                <div className="footer-logo-sec">
                  <img src={map} alt="Logo" />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <h2>Contact Info</h2>
                <div className="footer-logo-sec">
                 <p> <a href="tel:626 414 3616">626 414 3616</a><br/>
                  <a href="mailto:ask@equitasitinc.com">ask@equitasitinc.com</a></p> 
                </div>
                <div className="footer-logo-sec">
                 
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="copyrightsec">Copyright © 2021 All Rights Reserved.</div>
    </div>;
  }
}

export default Footer;
