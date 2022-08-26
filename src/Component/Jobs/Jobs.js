import React, { Component } from "react";
import jobsbanner from '../../assets/images/jobsbanner.jpg';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import * as Data from '../../Data/jobs.json';
import JobHeader from "./JobHeader";

class Jobs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      data: Data.data
    }
  }

  onSelect = (key) => {
    let filteredValues = Data.data.map((d, i) => {
      let index = d.keys.indexOf(key);
      if (index != -1) {
        return d;
      };
      return null;
    });

    let filterd = filteredValues.filter(function (el) {
      return el != null;
    })
    this.setState({
      selected: key,
      data: filterd
    });
  }


  render() {
    return <div className="Inner-page">
      <div className="inner-page-banner" style={{ backgroundImage: `url(${jobsbanner})` }}>

        <Container>
          <div className="banner-text">
           <div data-aos="fade-up"
     data-aos-duration="2000" >
            <h5>Work With Us</h5>
            <h1>Careers</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
          </div>
  </div>
        </Container>

      </div>
      <div className="jobs-loop-section">
        <Container>
          <div className="jobsmain" data-aos="fade-up"
     data-aos-duration="2000">
            {/* {
              Data.options.map((d, i) => {
                return <div onClick={() => this.onSelect(d.title)} className="jobs-box">
                  <div className="jobs-box-inner">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>Information<br/>
                      Technology</p>
                  </div>
                </div>
              })
            } */}

            <JobHeader selected={this.state.selected} title='Information Technology' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Information<br />
                Technology</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Pharmaceutical & Healthcare' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Pharmaceutical
                <br />
                & Healthcare</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Automobile' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Automobile</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Private Equity' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Private Equity</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Engineering' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Private Equity</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Banking & Financial Services' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Banking &
                Financial <br />
                Services</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Infrastructure' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Infrastructure</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Internet Ecommerce' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Internet/<br />
                Ecommerce</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Digital' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Digital</p>
            </JobHeader>

            <JobHeader selected={this.state.selected} title='Research & Consulting' onClick={(title) => this.onSelect(title)} icon={faBriefcase}>
              <p>Research<br />
                & Consulting</p>
            </JobHeader>
          </div>
        </Container>
      </div>

      <div className="jobspost-loop-section">
        <Container>
        <h2>Comming Soon.</h2>
          {/*
          <Row>
            {
              this.state.data.map((d, i) => {
                return <Col xs={12} md={6} data-aos="fade-up"
     data-aos-duration="2000">
                  <div className="jobpostbox">
                    <h2>{d.title}</h2>
                    <p>{d.description}</p>
                    <Link className="btn btn-light" to="/jobs/detail">Apply Now</Link>
                  </div>
                </Col>
              })
            }
          </Row>
         <div className="viewallbtn"><Button variant="light">View All Jobs</Button> </div> */}
        </Container>
      </div>


    </div >;
  }
}

export default Jobs;
