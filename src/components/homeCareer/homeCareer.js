import React, { Component } from 'react';
import careerImage from '../../assets/career.jpg';
import linkedInIcon from '../../assets/linkedIn.png';
import './homeCareer.css';

export default class HomeCareer extends Component {
  render() {
    return (
      <div className="home-career-page">
        <div className="container text-padding-extra-big">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-12 text-column-align-center col-padding-top">
                  <div>
                    <div className="text-bigger">
                      <p>
                        Career&nbsp;Management
                      </p>
                    </div>
                    <div className="text-medium">
                      <p>
                        Whether you are breaking in to the field or a veteran looking to change fields,
                        you deserve help of a personal career agent, just like star athletes.
                      </p>
                    </div>
                    <button className="normal-button text-small">Build a career</button>
                  </div>  
                </div>
                <div className="offset-lg-1 col-lg-6 col-md-6 col-12">
                  <img src={careerImage} className="normal-image-shadow"/>
                </div>
            </div>
            <div className="row align-items-center footer-part">
              <div className="col-md-6 footer-part-text">
                <div className="text-medium">
                  If we could help you build your career
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
