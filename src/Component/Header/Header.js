import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import equitlogo from '../../assets/images/equit-logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  withRouter
} from "react-router-dom";
import NavLink from "./NavLink";
import * as Data from '../../Data/headers.json';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="main-header"><div className="top-header">
      <ul>
        <li><a href="mailto:ask@equitasitinc.com">  <FontAwesomeIcon icon={faEnvelope} /> ask@equitasitinc.com</a></li>
        <li><a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Frisco, TX 75033</a></li>
        <li><a href="tel:626 414 3616"> <FontAwesomeIcon icon={faPhoneAlt} /> 626 414 3616</a></li>
      </ul></div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home"> <img src={equitlogo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              {
                Data.data.map((d, i) => {
                  return <NavLink to={d.to} title={d.title} key={'link-' + i} props={this.props} />
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  }
}

export default withRouter(Header);
