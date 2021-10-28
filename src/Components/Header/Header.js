import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../img/logos/logo.png";


const Header = () => {
    return (
        <>
         <header>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img className="img-fluid" style={{maxWidth: "250px"}} src={logo} alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="ml-auto collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto my-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/homepage">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="adminvolunteer">Volunteer</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/event">My Event</NavLink>
                            </li>
                        </ul>
                        <NavLink className="btn btn-primary ms-1" to="register">Register</NavLink>
                        <NavLink className="btn btn-dark ms-1" to="admin">Admin</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
        </>
    );
};

export default Header;