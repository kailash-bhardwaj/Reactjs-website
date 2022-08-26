import React, { Component } from "react";
import jobsbanner from '../../assets/images/jobsbanner.jpg'; 
import { Container, Button, Row, Col } from 'react-bootstrap';
import service1 from '../../assets/images/service1.jpg';
import service2 from '../../assets/images/service2.jpg';
import * as Data from '../../Data/home.json';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uber from '../../assets/images/uber logo.png';
import yelp from '../../assets/images/yelp logo.png';
import bank from '../../assets/images/bank of america logo.png';
import bcg from '../../assets/images/bcg logo.png';
import care from '../../assets/images/care mount logo.png';
import chase from '../../assets/images/chase logo.png';
import loreal from '../../assets/images/loreal logo.png';
import mass from '../../assets/images/mass mutual logo.png';
import nike from '../../assets/images/nike logo.png';
import publicissapient from '../../assets/images/publicissapient logo.png';
import solutions from '../../assets/images/rx solutions logo.png';
import tapestry from '../../assets/images/tapestry logo.png';
import webdeveloper from '../../assets/images/web-developer.jpg';
import PHANDHE from '../../assets/images/PHANDHE.jpg';
import automobile from '../../assets/images/automobile.jpg';
import privite from '../../assets/images/privite.jpg';
import engineering from '../../assets/images/engineering.jpg';
import bankimg from '../../assets/images/bank.jpg';
import infrastructure from '../../assets/images/infrastructure.jpg';
import internet from '../../assets/images/internet.jpg';
import digital from '../../assets/images/digital.jpg';
import rearch from '../../assets/images/rearch.jpg';

import Slider from "react-slick";

class Services extends Component {
  render() {
  	 const settings = {
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 6,
         slidesToScroll: 1,
          responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        
          }
        }
      ]
      };
            const settings2 = {
         dots: true,
         arrows: false,
         infinite: true,
         speed: 500,
         slidesToShow: 2,
         slidesToScroll: 1,
         responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        
          }
        }
      ]
      };
    return <div className="Inner-page">
<div className="inner-page-banner" style={{ backgroundImage: `url(${jobsbanner})` }}>

  <Container>
<div className="banner-text">
  <div data-aos="fade-up"
     data-aos-duration="2000" >
<h5>What we do</h5>
<h1>Services</h1>
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
                     
                     <img src={service1} alt="banner" />

                  </Col>
                  <Col xs={12} md={12} lg={6} data-aos="fade-left"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
   
                     <div className="staffingpstyle tickli">
                     <div className="title-text afternone">
                      
                        <h2>Provide Best Services For you</h2>
                     </div>
                    
                       
                        <p>Equitas IT INC is a multifunctional new age IT company providing innovative & customized IT staffing solutions to our clients. We understand your business requirements and provide simplified solutions by using our expertise & available resources.</p>

                        <ul>
                           <li>In the present business environment, there is a rising need for candidates on contract-basis. We help you in finding the right workforce to match your organization’s interests.</li>
                           <li>We help you in hiring the highly qualified & permanent IT Professionals for your company.</li>
                           <li>From technology implementation to delivering the service, our proficiency in IT Solutions will advance your company’s growth.</li>
                        </ul>
                     </div>
                  </Col>
               </Row>

            </div>
         </div>
<div className="staffing-section p-80 pt-0">
            <div className="container">
               <Row>
                 
                  <Col xs={12} md={12} lg={6} data-aos="fade-right"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
   
                     <div className="staffingpstyle tickli">
                    
                       
                        <p>We are an unconventional staffing agency and focus on your unique needs. We ensure to find the top talent that best fits your organization.</p>

                        <ul>
                           <li>We use our expertise to provide your organization with the best temporary IT staffing solutions.</li>
                           <li>We are skilled in screening the right candidates and have experience in deploying the permanent IT staff in large numbers.</li>
                           <li>Delivering ingenious IT solutions enabling clients to embrace the latest technologies for the betterment of their business.</li>
                        </ul>
                        <p>Information Technology is a dynamic industry and has immense potential for rapid growth. Though it has some barriers at entry level, at other levels there is fierce competition among the highly-valued global brands. However, the IT industry is constantly driven by innovation. </p>
                     </div>
                  </Col>
                   <Col xs={12} md={12} lg={6} data-aos="fade-left"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
                     
                     <img src={service2} alt="banner" />

                  </Col>
               </Row>
               
            </div>
         </div>
<div className="service-section" data-aos="fade-up"
     data-aos-duration="2000">
<div className="container">
 <Row>
                  <Col xs={12} md={5}>
                  <div className="title-text">
                        <h5>Services</h5>
                        <h2>Provide Unique & Quality Service</h2>
                     </div>
                  </Col>
                   <Col xs={12} md={7}>
                   <div className="blue-box">
                  
                  Do you have projects?
                 
                  <span className="phno">626 414 3616</span>
                  
               </div>
                  </Col>
               </Row>


               <div className="servces-boxes">

<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={webdeveloper} alt="banner" />
<div className="servicename">
Information<br/>
Technology
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={PHANDHE} alt="banner" />

<div className="servicename">
Pharmaceutical
& Healthcare
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={automobile} alt="banner" />
<div className="servicename">
Automobile
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={privite} alt="banner" />

<div className="servicename">
Private Equity
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={engineering} alt="banner" />

<div className="servicename">
Engineering
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={bankimg} alt="banner" />

<div className="servicename">
Banking &
Financial Services
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={infrastructure} alt="banner" />

<div className="servicename">
Infrastructure
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={internet} alt="banner" />

<div className="servicename">
Internet/
Ecommerce
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={digital} alt="banner" />

<div className="servicename">
Digital
</div>
</div>
<div className="services-box">
<FontAwesomeIcon icon={faPlus} />
 <img src={rearch} alt="banner" />

<div className="servicename">
Research
& Consulting
</div>
</div>

 </div>
 </div>
</div>

  <div className="serrvice-gray-setion p-80 " data-aos="fade-up"
     data-aos-duration="2000">
            <div className="container">
            <h2>Our Recent
               Clients</h2>
      <div className="glogoslider-main-section">
            <div className="glogoslider-main">

               <Slider {...settings}>
                  <div className="glogo-slider">
                     <img src={bank} alt="banner" />
                  </div>
                  <div className="glogo-slider">
                     <img src={bcg} alt="banner" />
                  </div>
                  <div className="glogo-slider">
                     <img src={yelp} alt="banner" />
                  </div>
                  <div className="glogo-slider">
                     <img src={uber} alt="banner" />
                  </div>
                  <div className="glogo-slider">
                     <img src={tapestry} alt="banner" />
                  </div>
                  <div className="glogo-slider">
                     <img src={solutions} alt="banner" />
                  </div>
                    <div className="glogo-slider">
                     <img src={publicissapient} alt="banner" />
                  </div>
               <div className="glogo-slider">
                     <img src={nike} alt="banner" />
                  </div>
                    <div className="glogo-slider">
                     <img src={mass} alt="banner" />
                  </div>
                    <div className="glogo-slider">
                     <img src={loreal} alt="banner" />
                  </div>
                    <div className="glogo-slider">
                     <img src={chase} alt="banner" />
                  </div>
                    <div className="glogo-slider">
                     <img src={care} alt="banner" />
                  </div>

               </Slider>
            </div>
         </div>

 </div>
 </div>
         <div className="testimonial-setion p-80 " data-aos="fade-up"
     data-aos-duration="2000">
            <div className="container">

               <Row>
                  <Col xs={12} md={6}>
                     <div className="title-text">
                        <h5>TESTIMONIALS</h5>
                        <h2>{Data.testimonial_header}</h2>
                     </div>
                     <p>Here’s what our employees has to say about Equitas IT INC</p>
                  </Col>
                  <Col xs={12} md={6}>
                     <div className="testimonial-slider-main">
                        <Slider {...settings2}>
                           {
                              Data.employee_testimonials.map((data, index) => {
                                 return <div className="testimonial-slider"><div className="testimonial-box">
                                    <p>{data.description}</p>
                                    <div className="testi-auther"><span></span>{data.title}</div></div>
                                 </div>
                              })
                           }
                        </Slider>
                     </div>
                  </Col>
               </Row>

            </div>
         </div>



</div>;
  }
}

export default Services;
