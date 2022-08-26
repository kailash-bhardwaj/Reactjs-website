import React, { Component } from "react";
import jobsbanner from '../../assets/images/jobsbanner.jpg';
import { Container, Button, Row, Col } from 'react-bootstrap';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import * as Data from '../../Data/blogs.json';

class Blogs extends Component {
  render() {
    return <div className="Inner-page">
      <div className="inner-page-banner" style={{ backgroundImage: `url(${jobsbanner})` }}>

        <Container>
          <div className="banner-text">
             <div data-aos="fade-up"
     data-aos-duration="2000" >
            <h5>Our Blog</h5>
            <h1>Blog Post</h1>
            <p>Get the latest information related to job opportunities, IT Staffing Services & Solutions and more. </p>
          </div>
 </div>
        </Container>

      </div>
      <Container>

        <Row className="blog-row blogsection" data-aos="fade-up"
     data-aos-duration="2000">
          {
            Data.data.map((d, i) => {
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
                    <div className="blog-autoer">
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
      </Container>


    </div>;
  }
}

export default Blogs;
