import React, { Component } from 'react';
import linkedInIcon from '../../assets/linkedIn.png';
import './homeSpecial.css';

export default class HomeSpecial extends Component {
  render() {
    return (
      <div className="home-special-page">
        <div className="opacity-background">
          <div className="container skilled-hire-main-part text-center">
              <div className="text-bigger text-padding-bottom-small">
                  Special Content
              </div>
              <div className="text-big text-padding-bottom-small offset-lg-3 col-lg-6 offset-md-1 col-md-10">
                  Lorem lpsum is simply dummy text of the printing and typesetting industry. 
                  Lorem lpsum has been the industry's standard dummy text              
              </div>
              <div className="footer-part-button">
                <button className="normal-button normal-button-with-icon text-normal">
                    Pre Register With Linked&nbsp;
                    <img src={linkedInIcon} className="social-icon"/>
                </button>              
              </div>
          </div>
        </div>
      </div>
    )
  }
}
