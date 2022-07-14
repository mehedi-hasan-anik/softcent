import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <img src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-container" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#hero">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">WORK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#premium">PREMIUM PRODUCTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-primary text-white px-3"
                                href="#start">START A PROJECT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;