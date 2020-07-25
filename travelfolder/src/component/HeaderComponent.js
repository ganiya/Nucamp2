import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css'
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOPen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNAvOpen
        });
    }


    render() {
        return (
            <div className="bg">
                <header>
                    <div className="container">

                        <div className="row">
                            <div className="col" className="span">
                                <div className="col-4 col-sm-3 col-md-2 align-self-center">

                                    <h3>Gani's Adventures</h3>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-sm navbar-light sticky-top">
                                <div className="container">

                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#nucampNavbar">
                                        <span className="navbar-toggler-icon"> </span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="nucampNavbar">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">
                                                    Adventures</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#">

                                                Relaxation</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">

                                                Nightlife</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">

                                                Contact</a></li>


                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="fa fa-facebook"> </i> </a> </li>

                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="fa fa-instagram"></i> </a> </li>

                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="fa fa-twitter"></i> </a> </li>

                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="fa fa-youtube"></i> </a> </li>

                                        </ul>

                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>

                    <div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br />
                        <p> <strong> Explore The Magic In Your Backyard </strong></p>
                    </div>
                    <br /><br /><br />
                </header >
            </div >
            
        );
    }
}

export default Header;