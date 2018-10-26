import React, { Component } from 'react';
import characterIcon_1 from '../../assets/character-1.png';
import characterIcon_2 from '../../assets/character-2.png';
import characterIcon_3 from '../../assets/character-3.png';
import './homeCharacter.css';

export default class HomeCharacter extends Component {
  render() {
    return (
      <div className="home-character-page">
        <div className="container text-center text-padding-extra-big text-padding-for-col">
            <div className="text-bigger">
                Character Selection
            </div>
            <div className="row text-padding-extra-big justify-content-center">
                <div className="col-md-4 col-8">
                  <img src={characterIcon_1} className="big-icon" />
                  <div className="text-small">
                    Competent technical knowledge in your field of expertise
                  </div>
                </div>
                <div className="col-md-4  col-8 col-padding-top">
                  <img src={characterIcon_2} className="big-icon" />
                  <div className="text-small">
                    Positive team-player attitude
                  </div>                  
                </div>
                <div className="col-md-4  col-8 col-padding-top">
                  <img src={characterIcon_3} className="big-icon" />
                  <div className="text-small">
                    Ability to deliver in accordance to a professional cadence
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
