import React, { Component } from "react";
import { Button, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import homebanner from '../../assets/images/home-banner.jpg';
import projectbased from '../../assets/images/project-based.png';
import augmented from '../../assets/images/augmented.png';
import permanent from '../../assets/images/permanent.png';
import dedicated from '../../assets/images/dedicated.png';
import staff from '../../assets/images/staff.jpg';
import glogo from '../../assets/images/g-logo.jpg';
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
import uber from '../../assets/images/uber logo.png';
import yelp from '../../assets/images/yelp logo.png';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Data from '../../Data/home.json';
import * as Blogs from '../../Data/blogs.json';
import AnimatedNumber from 'react-animated-number';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useRouteMatch,
   useParams
} from "react-router-dom";

const images = require.context('../../../public/images', true);

class Home extends Component {
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
      const settings3 = {
         dots: true,
         arrows: true,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
        
      };
      return <div className="home-main">
      <div className="bannerslider">
      <Slider {...settings3}>
         <div className="banner-section">
            <img src={homebanner} alt="banner" />

            <div className="banner-content">
           <div data-aos="fade-up"
     data-aos-duration="2000">
               <h1 >{Data.title}</h1>
               <Link className='btn btn-light' to="/contact-us" >START WITH US NOW</Link>

</div>
            </div>
         </div>
 <div className="banner-section">
            <img src={homebanner} alt="banner" />

            <div className="banner-content">
           <div data-aos="fade-up"
     data-aos-duration="2000">
               <h1 >{Data.title}</h1>
               <Link className='btn btn-light' to="/contact-us" >START WITH US NOW</Link>

</div>
            </div>
         </div>
         </Slider>
          </div>
         <div className="approch-section p-80 text-center" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="2000" >
            <div className="container">
               <div className="title-text" >
                  <h5>OUR APPROACH</h5>
                  <h2>{Data.why_equitas.title}</h2>
               </div>
               <p>{Data.why_equitas.description}</p>

               <Row className="icon-section">
                  {
                     Data.why_equitas.options.map((d, i) => {

                        return <Col xs={6} md={3}>
                           <img key={i} src={`${process.env.PUBLIC_URL}/images/${d.icon}`} alt="banner" />
                           <p>Project-Based<br />
                              Staffing</p>
                        </Col>
                     })
                  }
               </Row>
            </div>
         </div>
         <div className="staffing-section p-80 pt-0">
            <div className="container">
               <Row>
                  <Col xs={12} md={6} data-aos="fade-right"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
                     <div className="title-text text-right">
                        <h5>WHO WE ARE</h5>
                        <h2>IT Staffing<br />
                           Company</h2>
                     </div>
                     <img src={staff} alt="banner" />

                  </Col>
                  <Col xs={12} md={6} data-aos="fade-left"
     data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
                     <div className="maxpsize"><p><b>Equitas IT INC</b> combines deep technology, staffing knowledge & long-term experience to create talent solutions to increase teams’ efficiency & agility, resulting in faster time-to-market and operational cost savings.</p></div>
                     <div className="staffingpstyle tickli">
                        <h3>Staffing Services for IT Companies</h3>
                        <p>In the current scenario, businesses demand agility. We understand our clients’ requirements and individuals’ career aspirations. Equitas IT INC has gained a unique perspective of both business and talent. It is one of the rapidly growing IT staffing firms, delivering great results</p>

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

         <div className="practices-setion tickli p-80 pt-0" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="container-practices">
               <div className="title-text text-center">
                  <h2>{Data.business_practices.title}</h2>
                  <p>{Data.business_practices.description}</p>
               </div>
               <Row>
                  <Col xs={12} md={6}>
                     <ul>{
                        Data.business_practices.list1.map((d, i) => {
                           return <li>{d}</li>
                        })}
                     </ul>
                  </Col>
                  <Col xs={12} md={6}>
                     <ul>
                        {
                           Data.business_practices.list2.map((d, i) => {
                              return <li>{d}</li>
                           })}
                     </ul>
                  </Col>
               </Row>
            </div>
         </div>

        
         <div className="serrvice-gray-setion p-80">
          <h2>Our Recent
               Clients</h2>
         <div className="glogoslider-main-section" data-aos="fade-up"
     data-aos-duration="3000">
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


         <div className="testimonial-setion p-80 pt-0 text-center" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="container">

               <Row>
                  {
                     Data.statistics.map((d, i) => {
                        return <Col key={'statistics-' + i} xs={6} md={3}>
                           <div className="counterbox">
                              {/* <div className="countno-mirrer">{d.count}</div> */}
                              <AnimatedNumber component="text" value={d.count}
                                 style={{
                                    transition: '0.8s ease-out',
                                    fontSize: 48,
                                    transitionProperty:'color, opacity'
                                 }}
                                 frameStyle={perc => (
                                    perc === 100 ? {} : { backgroundColor: '#fff' }
                                 )}
                                 className="countno-mirrer"
                                 duration={400}
                                 formatValue={n =>  n.toFixed(0) + '+'} />

                              <AnimatedNumber component="text" value={d.count}
                                 style={{
                                    transition: '0.8s ease-out',
                                    fontSize: 48,
                                    transitionProperty:'color, opacity'
                                 }}
                                 frameStyle={perc => (
                                    perc === 100 ? {} : { backgroundColor: '#fff' }
                                 )}
                                 className="countno"
                                 duration={400}
                                 formatValue={n =>  n.toFixed(0) + '+'} />

                              {/* <div className="countno">{d.count}</div> */}
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
                  <Col xs={12} md={6}>
                     <div className="title-text text-right">
                        <h5>OUR BLOG</h5>
                        <h2>Latest Post
                           <br />
                           From Blog</h2>
                     </div>
                  </Col>
                  <Col xs={12} md={6}>
                     <div className="maxpsize"><p>Keep an eye on our blog to catch up with the employment opportunities and latest information about innovative IT staffing solutions.</p></div>
                  </Col>
               </Row>
               <Row className="blog-row">

                  {
                     Blogs.data.map((d, i) => {
                        return <Col xs={12} md={4}>
                           <div className="blog-box">
                              <div className="blog-img"><img src={`${process.env.PUBLIC_URL}/images/${d.img}`} alt="blog" /></div>
                              <div className="blogcontent">
                                 <div className="blogdate"><FontAwesomeIcon icon={faClock} /> {d.date}</div>
                                 <h3>{d.title}</h3>
                                 <p>{d.short_description} <span>  <Link to={{
                                    pathname: '/blog-detail',
                                    state: {
                                       data: d
                                    }
                                 }}>Read More</Link></span></p>
                               {/*  
                                 <div className="blog-autoer" >
                                    <div className="blog-a-name"><FontAwesomeIcon icon={faUser} /> by {d.author}
                                    </div>
                                    <div className="blog-a-commment"><FontAwesomeIcon icon={faComment} /> {d.comments}
                                    </div>
                                 </div>
                                 */}
                              </div>
                           </div>

                        </Col>
                     })
                  }
               </Row>
            </div>
         </div>
      </div>;
   }
}

export default Home;
