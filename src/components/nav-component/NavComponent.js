import React, {Component} from "react";
import './NavComponent.css';
// import logo from './../../images/Bank first page-min.jpg'
import {Link} from 'react-router-dom'
import './../../../node_modules/font-awesome/fonts/fontawesome-webfont.svg'

class NavComponent extends Component{
  constructor(props) {
    super();

    this.state = {
      login: localStorage.getItem('login')
    }
  }

  logout = ()=> {
    console.log(localStorage.getItem('login'));
    localStorage.clear()
  }

  render(){
    return (
      <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="hamberger">
          <i className="fa fa-align-justify"></i>
        </label>
        <ul>
          <li>Home</li>
          <li>Aboutus</li>
          <li>More</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default NavComponent
