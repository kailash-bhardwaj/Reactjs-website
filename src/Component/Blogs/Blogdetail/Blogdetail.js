import React, { Component } from "react";
import jobsbanner from '../../../assets/images/jobsbanner.jpg';
import blogdetails from '../../../assets/images/blogdetails.jpg';
import blogdetails2 from '../../../assets/images/blog-detail2.jpg';
import { Container, Button, Row, Col } from 'react-bootstrap';
import * as blogs from '../../../Data/blogdetails';


class Blogdetail extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    const data = this.props.location.state.data;



    return <div className="Inner-page">
      <div className="inner-page-banner" style={{ backgroundImage: `url(${jobsbanner})` }}>

        <Container>
          <div className="banner-text">
          <div data-aos="fade-up"
     data-aos-duration="2000" >
            <h5>Our Blog</h5>
            <div dangerouslySetInnerHTML={{ __html: data.desc }}></div>
            {/* <p>Struggling to Find a Job?
              Five Reasons To Work with
              an IT Staffing Agency</p> */}
          </div>
</div>
        </Container>

      </div>

      <div className="staffing-section p-80" data-aos="fade-up"
     data-aos-duration="2000">
        <div dangerouslySetInnerHTML={{ __html: blogs[data.html] }} />
      </div>
    </div>;
  }
}

export default Blogdetail;
