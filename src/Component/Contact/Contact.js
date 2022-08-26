import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import jobsbanner from '../../assets/images/jobsbanner.jpg';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import contact from '../../assets/images/contact.jpg';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iframe from 'react-iframe'
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import Loader from "react-loader-spinner";
import './Contact.css'

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      message: '',
      email: '',
      isLoading: false,
      info: '',
      error: ' '
    }
  }


  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    if (this.state.first_name == '' || this.state.last_name == '' || this.state.message == '' || this.state.email == '') {
      this.setState({
        info: '',
        error: 'Please fill the form'
      });
      return;
    }

    this.setState({
      isLoading: true,
      info: '',
      error: ''
    });
    axios.post('https://ravivarma.me/server/public/api/send-mail', this.state)
      .then(response => {
        this.setState({
          isLoading: false
        });
        if (response.data.success) {
          this.setState({
            first_name: '',
            last_name: '',
            message: '',
            email: '',
            info: 'Thank you for contacting us, we will get back to you shortly'
          });
        } else {
          this.setState({
            error: 'Unable to process your request'
          })
        }
      }).catch(error => {
        this.setState({
          isLoading: false
        });
        console.log(error);
      });
  }

  render() {
    return <div className="Inner-page">
      <div className="inner-page-banner" style={{ backgroundImage: `url(${jobsbanner})` }}>

        <Container>
          <div className="banner-text">
          <div data-aos="fade-up"
     data-aos-duration="2000" >
            <h5>Contact Us</h5>
            <h1>Get In Touch</h1>
            <p>We use our extensive resources & expertise to find the top talent with the right skills to address your company’s needs. You can reach out to us for any kind of assistance.</p>
          </div>
          </div>

        </Container>

      </div>

      <div className="staffing-section p-80" data-aos="fade-up"
     data-aos-duration="2000">
        <div className="container">
          <Row>
            <Col xs={12} md={6} data-aos="fade-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine">

              <img src={contact} alt="banner" />

            </Col>
            <Col xs={12} md={6} data-aos="fade-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine">

              <div className="staffingpstyle tickli">
                <div className="title-text after-none">
                  <h5>Do You Have A Project? Let’s Start</h5>
                </div>
                <h3>Contact With Us</h3>
                <p>If you are looking for the best hiring partner, then you have reached the right place. Contact us today for IT Staffing Solutions & Services.</p>

                <div className="contactbox">
                  <h2>Office Address</h2>
                  <p>4645 Avon LN 285<br />
                    Frisco, TX 75033
                  </p>
                </div>
                <div className="contactbox">
                  <h2>Contact Info</h2>
                  <p><FontAwesomeIcon icon={faPhoneAlt} /> 626 414 3616<br />
                    <FontAwesomeIcon icon={faEnvelope} />  ask@equitasitinc.com
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="contact-secsecond">
            <Col xs={12} md={6} data-aos="fade-right"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine">
              <h2>Leave a Message</h2>
              <p>If you have any queries or want to get in touch with us, drop a message and we will get back to you at the earliest</p>
              <Form onSubmit={(e) => this.onSubmit(e)}>
                <Row>

                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control onChange={(e) => this.setState({ first_name: e.target.value })} value={this.state.first_name} type="text" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control onChange={(e) => this.setState({ last_name: e.target.value })} value={this.state.last_name} type="text" placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message} as="textarea" rows={3} placeholder="Message" />
                </Form.Group>
                <Button variant="primary submitbuttonform" type="submit">
                  Submit
                </Button>
                {/* Success message content */}
                {
                  this.state.info ? <p style={{ color: 'green' }}>{this.state.info}</p> : ''
                }
                {
                  this.state.error ? <p style={{ color: 'red' }}>{this.state.error}</p> : ''
                }
                {/* Loading  */}
                {
                  this.state.isLoading ? <div class="loader"></div> : null
                }

              </Form>

            </Col>
            <Col xs={12} md={6} data-aos="fade-left"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine">
              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26718.54796415528!2d-96.8579499876975!3d33.16639159894463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3ebd411e23ef%3A0x60b9fb611eab98f8!2sFrisco%2C%20TX%2075033%2C%20USA!5e0!3m2!1sen!2sin!4v1625152825125!5m2!1sen!2sin  "
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />

            </Col>
          </Row>

        </div>
      </div>




    </div>;
  }
}

export default Contact;
