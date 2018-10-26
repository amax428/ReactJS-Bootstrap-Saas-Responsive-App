import React, { Component } from 'react';
import offerImage from '../../assets/offer.jpg';
import offerIcon_1 from '../../assets/reasons-why-1.png';
import offerIcon_2 from '../../assets/reasons-why-2.png';
import offerIcon_3 from '../../assets/reasons-why-3.png';
import './skilledOffer.css';

export default class SkiiledOffer extends Component {
  render() {
    return (
      <div className="skilled-offer-page">
        <div className="container text-padding-extra-big">
            <div className="text-biggest text-center  text-padding-bottom-extra-big">
                The Strong Hire Offer
            </div>
            <div className="row offer-content">
                <div className="col-md-6 col-12">
                    <img src={offerImage} className="normal-image-shadow"/>
                </div>
                <div className="col-md-6 col-12 text-column-align-center right-part col-padding-top">
                    <div className="offer-content-area">
                        <div className="text-bigger text-center text-padding-bottom-small">
                            Reasons Why
                        </div>
                        <div>
                            <div className="reason-item">
                                <img src={offerIcon_1} className="small-icon" />
                                <span className="text-medium">We weed out toxic workplaces</span>
                            </div>
                            <div className="reason-item">
                                <img src={offerIcon_2} className="small-icon" />
                                <span className="text-medium">We facilitate direct placements</span>
                            </div>
                            <div className="reason-item">
                                <img src={offerIcon_3} className="small-icon" />
                                <span className="text-medium">You deserve the best fit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
