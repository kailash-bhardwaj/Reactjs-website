import React from 'react';

import {
    Link
  } from "react-router-dom";

const NavLink = (props) =>{

    var isActive = props.props.history.location.pathname.includes(props.to);
    var className = isActive ? 'nav-link active-menu' : 'nav-link';

    console.log(isActive, props);

    return(
        <Link className={className} to={props.to}>{props.title}</Link>
    )
}

export default NavLink;