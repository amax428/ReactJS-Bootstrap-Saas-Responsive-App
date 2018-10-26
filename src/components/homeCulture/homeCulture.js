import React, { Component } from 'react';
import cultureImage from '../../assets/culture.jpg';
import linkedInIcon from '../../assets/linkedIn.png';
import './homeCulture.css';

export default class HomeCulture extends Component {
  render() {
    return (
      <div className="home-culture-page">
        <div className="container text-padding-extra-big">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={cultureImage} className="normal-image-shadow"/>
                </div>
                <div className="offset-lg-1 col-lg-5 col-md-6 col-12 text-column-align-center col-padding-top">
                  <div>
                    <div className="text-bigger">
                      <p>
                        NonToxic&nbsp;Work Cultures
                      </p>
                    </div>
                    <div className="text-medium">
                      <p>
                        We believe that nontoxic environments that allow individual growth
                        should be the norm.
                      </p>
                    </div>
                    <button className="normal-button text-small">Find a better fit</button>
                  </div>
                </div>
            </div>
            <div className="row align-items-center footer-part">
              <div className="col-md-6 footer-part-text">
                <div className="text-medium">
                  If we could help you fire your boss
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
