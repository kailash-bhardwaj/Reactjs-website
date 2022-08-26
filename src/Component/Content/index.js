import React from 'react';
import {
    Switch,
    Route,Redirect
} from "react-router-dom";
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import Jobs from '../Jobs/Jobs';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Jobdetails from '../Jobdetails/Jobdetails';
import Blogdetail from '../Blogs/Blogdetail/Blogdetail';
export default function Content(props) {
    return (
        <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/about-us' component={About}></Route>
            <Route exact path='/services' component={Services}></Route>
            <Route exact path='/contact-us' component={Contact}></Route>
            <Route exact path='/jobs' component={Jobs}></Route>
            <Route exact path='/blogs' component={Blogs}></Route>
            <Route exact path='/jobs/detail' component={Jobdetails}></Route>
            <Route exact path='/blog-detail' component={Blogdetail}></Route>
            <Redirect to='/home'/>
        </Switch>

    );
}