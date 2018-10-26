import React, { Component } from 'react';
import qualificationIcon_1 from '../../assets/qualification-1.png';
import qualificationIcon_2 from '../../assets/qualification-2.png';
import qualificationIcon_3 from '../../assets/qualification-3.png';
import './skilledQualification.css';

export default class SkilledQualification extends Component {
  render() {
    return (
      <div className="skilled-qualification-page">
        <div className="container text-center text-padding-extra-big">
            <div className="text-bigger">
                Qualification
            </div>
            <div className="row text-padding-extra-big text-padding-for-col justify-content-center">
                <div className="col-md-4 col-8">
                  <img src={qualificationIcon_1} className="big-icon" />
                  <div className="text-small">
                    Competent technical knowledge in your field of expertise
                  </div>
                </div>
                <div className="col-md-4  col-8 col-padding-top">
                  <img src={qualificationIcon_2} className="big-icon" />
                  <div className="text-small">
                    Positive team-player attitude
                  </div>                  
                </div>
                <div className="col-md-4  col-8 col-padding-top">
                  <img src={qualificationIcon_3} className="big-icon" />
                  <div className="text-small">
                    Ability to deliver in accordance to a professional cadence
                  </div>
                </div>
            </div>
            <div className="question-area row justify-content-center">
              <div className="text-biggest text-uppercase col-lg-4 col-md-6 col-12">
                If&nbsp;this&nbsp;is&nbsp;you
              </div>
              <div className="col-lg-4 col-md-6 col-12 col-padding-top">
                <button className="normal-button text-normal text-normal-b">Make&nbsp;your&nbsp;next&nbsp;hire a&nbsp;strong&nbsp;one</button>
              </div>
              
            </div>
            <div className="text-center text-normal text-normal-i">
              Training&nbsp;available&nbsp;for&nbsp;those needing&nbsp;work&nbsp;experience
            </div>
        </div>
      </div>
    )
  }
}
