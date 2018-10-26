import React, { Component } from 'react';
import socialImage from '../../assets/social.jpg';
import linkedInIcon from '../../assets/linkedIn.png';
import './homeSocial.css';

export default class HomeSocial extends Component {
  render() {
    return (
      <div className="home-social-page">
        <div className="container text-padding-extra-big">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={socialImage} className="normal-image-shadow"/>
                </div>
                <div className="offset-lg-1 col-lg-5 col-md-6 col-12 text-column-align-center col-padding-top">
                  <div>
                    <div className="text-bigger">
                      <p>
                        Social&nbsp;Hiring
                      </p>
                    </div>
                    <div className="text-medium">
                      <p>
                        Recruiting shouldn't just be for a select few.
                      </p>
                    </div>
                    <button className="normal-button text-small">Build a passive revenue stream</button>
                  </div>
                </div>
            </div>
            <div className="row align-items-center footer-part">
              <div className="col-md-6 footer-part-text">
                <div className="text-medium">
                  If you could help us spread the wealth
                </div>
              </div>
              <div className="col-md-6 col-padding-top footer-part-button">
                <button className="normal-button normal-button-with-icon text-small">
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
