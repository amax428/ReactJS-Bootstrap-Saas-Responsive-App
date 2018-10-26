import React, { Component } from 'react';
import bannerImage from '../../assets/banner-home-page.png';
import './homePageBanner.css';

export default class HomePageBanner extends Component {
  render() {
    return (
      <div className="home-page-banner">
        <div className="container">
          <div className="row text-column-align-center">
            <div className="col-md-6 col-padding-top">
              <div className="text-bigger">       
                <p>
                  Build&nbsp;Your Carreer&nbsp;With<br/>
                  <span className="text-bigger green-text">
                  Strong&nbsp;Hire&nbsp;
                </span>         
                <span className="text-bigger">
                  Today
                </span>
                </p>
              </div>
              <div className="text-smaller">
                <p>
                  The First Ever Distributed Hiring Network
                </p>
              </div>
              <button className="normal-button text-small">Get Started</button>
            </div>
            <div className="col-md-6">
              <img src={bannerImage} className="normal-image"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
