import React, { Component } from "react";
import jobsbanner from '../../assets/images/jobsbanner.jpg';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import jobdetails from '../../assets/images/jobdetails.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";

class Jobdetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      first_name: '',
      last_name: '',
      contact_number: '',
      alternate_contact: '',
      email: '',
      dob: '',
      address: '',
      city: '',
      pincode: '',
      file: '',
      isLoading: false,
      info: '',
      error: ' '
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
      error: '',
      info: ''
    });
    var formData = new FormData();
    formData.append('First Name', this.state.first_name);
    formData.append('Last Name', this.state.last_name);
    formData.append('Contact Number', this.state.contact_number);
    formData.append('Altername Mobile', this.state.alternate_contact);
    formData.append('Email', this.state.email);
    formData.append('Date Of Birth', this.state.dob);
    formData.append('Address', this.state.address);
    formData.append('City', this.state.city);
    formData.append('Pincode', this.state.pincode);
    formData.append('file', this.state.file);

    axios.post('https://ravivarma.me/server/public/api/send-mail', formData)
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          this.setState({
            first_name: '',
            last_name: '',
            contact_number: '',
            alternate_contact: '',
            email: '',
            dob: '',
            address: '',
            city: '',
            pincode: '',
            file: '',
            isLoading: false,
            info: 'Updated successfully',
          });
        } else {
          this.setState({
            isLoading: false,
            info: '',
            error: 'Unable to update'
          });
        }
      }).catch(error => {
        this.setState({
          isLoading: false,
          info: '',
          error: 'Unable to update'
        })
        console.log(error);
      });

    // this.setState({
    //   showModal: false
    // })
  }

  onFileSelected = (e) => {
    console.log(e);
    this.setState({
      file: e.target.files[0]
    })
  }

  render() {

    const { info, error, isLoading } = this.state;

    return <div className="Inner-page">
      <div className="inner-page-banner" style={{ backgroundImage: `url(${jobsbanner})` }}>

        <Container>
          <div className="banner-text">
             <div data-aos="fade-up"
     data-aos-duration="2000" >
            <h5>Work With Us</h5>
            <h1>Careers</h1>
          </div>
 </div>
        </Container>

      </div>


      <Container>
        <div className="jobtitle-box" data-aos="fade-up"
     data-aos-duration="2000">
          <Row>
            <Col xs={12} md={12} lg={6}>
              <h2>Graphic Designer</h2>
              <h5>Hyderabad</h5>
            </Col>
            <Col xs={12} md={12} lg={6} className="text-md-right">

              <Button className="btn btn-light" onClick={() => this.setState({ showModal: true })} >Apply For This Job</Button>
            </Col>
          </Row>
        </div>

      </Container>

      <div className="staffing-section p-80">
        <div className="container">
          <Row>

            <Col xs={12} md={12} lg={6} data-aos="fade-right"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">

              <div className="staffingpstyle tickli">


                <h3>Job Description</h3>
                <p>It is a long established fact that a reader
                  will be distracted by the readable content
                  of a page when looking at its layout.</p>

                <ul>
                  <li>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6}  data-aos="fade-left"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">

              <img src={jobdetails} alt="banner" />

            </Col>
          </Row>
        </div>
      </div>

      <div className="job-details-boxes" >
        <div className="container">

          <Row data-aos="fade-up"
     data-aos-duration="2000">

            <Col xs={12} md={6} lg={3}>
              <div className="jobdetailbluebox"><div className="jobdetailbluebox-inner">
                <h5>Age</h5>
                <p>25+ Years</p>
              </div></div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="jobdetailbluebox"><div className="jobdetailbluebox-inner">
                <h5>Education</h5>
                <p>Any Graduation
                  Degree</p>
              </div></div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="jobdetailbluebox"><div className="jobdetailbluebox-inner">
                <h5>Experience</h5>
                <p>1-3 Years</p>
              </div></div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="jobdetailbluebox">
                <div className="jobdetailbluebox-inner">
                  <h5>Skills</h5>
                  <p>Adobe Photoshop,
                    illustrator, Premier Pro</p>
                </div></div>
            </Col>
          </Row>
        </div>
      </div>
      <Modal handleSubmit={() => this.handleSubmit()} show={this.state.showModal} handleClose={() => this.setState({ showModal: false })}>
        <div className="jobappform">
          <h2>Job Application Form</h2>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Row>

              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value })} type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value })} type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>

              <Col xs={12} md={6}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.contact_number} onChange={(e) => this.setState({ contact_number: e.target.value })} type="text" placeholder="Contact Number" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.alternate_contact} onChange={(e) => this.setState({ alternate_contact: e.target.value })} type="text" placeholder="Alternate Number" />
                </Form.Group>
              </Col>
            </Row>

            <Row>

              <Col xs={12} md={6}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="email" placeholder="Email Address" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.dob} onChange={(e) => this.setState({ dob: e.target.value })} type="text" placeholder="Date Of Birth: DD.MM.YYYY" />
                </Form.Group>
              </Col>
            </Row>
            <Row>

              <Col xs={12} md={4}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} type="text" placeholder="Current Address" />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} type="text" placeholder="City" />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control value={this.state.pincode} onChange={(e) => this.setState({ pincode: e.target.value })} type="text" placeholder="Pincode" />
                </Form.Group>
              </Col>
            </Row>

            <Row>

              <Col xs={12} md={12}>
                <Form.Group controlId="formFile" className="mb-3">
                  {/* <Form.File  onChange={(e) => e.target } type="file" /> */}
                  <input onChange={this.onFileSelected} type='file' />
                </Form.Group>
              </Col>
            </Row>
            {
              console.log(this.state)
            }

            {
              info ? <p style={{ color: 'green' }}>{this.state.info}</p> : ''
            }
            {
              error ? <p style={{ color: 'red' }}>{this.state.error}</p> : ''
            }
            {/* Loading  */}
            {
              isLoading ? <div class="loader"></div> : null
            }

            <div className="buttonsection">
              {/* Success message content */}

              <Button variant="primary submitbuttonform" type="submit">
                Submit
              </Button>
              <Button variant="primary submitbuttonform" onClick={() => this.setState({ showModal: false })}>
                Close
              </Button>
            </div>
          </Form>
        </div>
      </Modal>

    </div>;
  }
}

export default Jobdetails;
