import React, { Component } from "react";
import jobsbanner from '../../assets/images/jobsbanner.jpg';
import { Container, Button, Row, Col } from 'react-bootstrap';
import aboutimg from '../../assets/images/about-img.jpg';
import mission from '../../assets/images/mission.jpg';
import visions from '../../assets/images/visions.jpg';
import team from '../../assets/images/team.jpg';
import * as Data from '../../Data/home.json';

class About extends Component {
   render() {
      return <div className="Inner-page">
         <div className="inner-page-banner" style={{ backgroundImage: `url(${jobsbanner})` }}>

            <Container>
               <div className="banner-text">
               <div data-aos="fade-up"
     data-aos-duration="2000" >
                  <h5>What we do</h5>
                  <h1>About Us</h1>
                  <p>Industry Leading Staffing Experts</p>
               </div>
               </div>

            </Container>

         </div>

         <div className="staffing-section p-80">
            <div className="container">
               <Row>
                  <Col xs={12} md={12} lg={6} data-aos="fade-right"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">

                     <img src={aboutimg} alt="banner" />

                  </Col>
                  <Col xs={12} md={12} lg={6} data-aos="fade-left"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">

                     <div className="staffingpstyle tickli pt-0">
                        <div className="title-text afternone">
                           <h5>Since 0000</h5>
                           <h2>IT Staffing<br />
                              Company</h2>
                        </div>

                        <h3>Staffing Services for
                           Various Industries</h3>
                        <p>Equitas IT INC combines deep technology, staffing knowledge & long-term experience to create talent solutions to increase teams’ efficiency & agility, resulting in faster time-to-market and operational cost savings.</p>

                        <ul>
                           <li>We work actively with our clients and enable them to achieve & optimize the strategic components to business success – right skills, competencies, right people & right attitudes.</li>
                           <li>We focus on fulfilling your needs; we support short-term, temporary or permanent IT staffing solutions.</li>
                           <li>Our quality-oriented services help you in finding the top talent to meet your specific requirements.</li>
                        </ul>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>

         <div className="testimonial-setion p-80 pt-0 text-center" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="container">

               <Row>
                  {
                     Data.statistics.map((d, i) => {
                        return <Col key={'statistics-' + i} xs={6} md={3}>
                           <div className="counterbox">
                              <div className="countno-mirrer">{d.count}</div>
                              <div className="countno">{d.count}</div>
                              <p>{d.title}</p>
                           </div>
                        </Col>
                     })
                  }
               </Row>
            </div>
         </div>
         <div className="staffing-section p-80 pt-0" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="container">
               <Row>
                  <Col xs={12} md={5} data-aos="fade-right"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
 <div className="staffingpstyle tickli">
                     <img src={mission} alt="banner" />
</div>
                  </Col>
                  <Col xs={12} md={7} data-aos="fade-left"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">

                     <div className="staffingpstyle tickli">


                        <h3>Our Mission</h3>
                        <p>We are committed to help businesses grow & thrive by connecting them to the right talent with extensive use of our resources. We aspire to be the leading partner for clients and candidates to connect with. We constantly aim to improve our services to our clients. We adapt to the industry trends as well as to our clients’ changing needs to ensure mutual success & growth. </p>

                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col xs={12} md={7} data-aos="fade-right"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">

                     <div className="staffingpstyle tickli">


                        <h3>Our Vision</h3>
                        <p>Our vision is to emerge as a global leader in providing quality IT services to our clients by combining our domain expertise & technology skills and maintaining a long-term relationship with our clients. We are determined to connect great organizations with great people. We maximize the opportunities by consistently providing valuable HR solutions. We always strive to deliver what we promise. </p>

                     </div>
                  </Col>
                  <Col xs={12} md={5} data-aos="fade-left"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
<div className="staffingpstyle tickli">
                     <img src={visions} alt="banner" />
 </div>
                  </Col>

               </Row>
            </div>
         </div>
         <div className="staffing-section p-80 pt-0" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="container">
               <Row>
                  <Col xs={12} md={6}>

                     <div className="title-text text-right">
                        <h5>TEAM</h5>
                        <h2>Our Talented
                           <br />
                           Team members</h2>
                     </div>

                  </Col>
                  <Col xs={12} md={6}>

                     <div className="maxpsize"><p>We are a team of enthusiasts who are committed to offer creative & customizable solutions to our clients. We have many years of experience in IT staffing; our highly qualified team come from different backgrounds who possess ample knowledge in various industries and verticals.</p></div>
                  </Col>
               </Row>
               <Row className="aboutuser">
                  <Col xs={6} md={3}>
                  <div className="teambox">
                     <img src={team} alt="banner" />
                     <div className="teamcontent">
<h5>Jhone doe</h5>
<p>Web designer</p>
                     </div>
                     </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="teambox">
                     <img src={team} alt="banner" />
                     <div className="teamcontent">
<h5>Jhone doe</h5>
<p>Web designer</p>
                     </div>
                     </div>
                  </Col>
                  <Col xs={6} md={3}>
                     <div className="teambox">
                     <img src={team} alt="banner" />
                     <div className="teamcontent">
<h5>Jhone doe</h5>
<p>Web designer</p>
                     </div>
                     </div>
                  </Col>
                  <Col xs={6} md={3}>
                     <div className="teambox">
                     <img src={team} alt="banner" />
                     <div className="teamcontent">
<h5>Jhone doe</h5>
<p>Web designer</p>
                     </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>

      </div>;
   }
}

export default About;
