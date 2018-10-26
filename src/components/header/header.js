import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-no header-page text-smaller">
            <a className="navbar-brand text-normal" href="/">
                    Strong&nbsp;Hire
            </a>
            <button className="navbar-toggler text-right" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end text-right" id="myNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/skilled" className="nav-link nav-active">Candidates</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Side&nbsp;Hustlers</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Project&nbsp;Mangers</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Register</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Log&nbsp;in</a>
                    </li>
                </ul>
            </div>
        </nav>        
      </div>
    )
  }
}
