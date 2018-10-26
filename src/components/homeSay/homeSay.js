import React, { Component } from 'react';
import carouselImage1 from '../../assets/smiling-woman.jpg';
import carouselImage2 from '../../assets/offer.jpg';
import carouselImage3 from '../../assets/social.jpg';
import carouselImage4 from '../../assets/career.jpg';
import './homeSay.css';

export default class HomeSay extends Component {
  render() {
    return (
      <div className="home-say-page text-padding-extra-big">
        <div className="container">
          <div className="text-bigger text-center ">
              Hear What Others Say
          </div>
          <div id="feedback" className="carousel slide text-padding-extra-big" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-5 col-md-6">
                    <img src={carouselImage1} alt="Los Angeles" className="carousel-image"/>
                  </div>
                  <div className="offset-lg-1 col-md-6 text-column-align-center col-padding-top">
                    <div>
                      <div className="text-big text-padding-bottom-small">
                        Lorem lpsum
                      </div>
                      <div className="text-small">
                        Lorem lpsum is simply dummy text of ther printing and typesetting industry.
                        Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-5 col-md-6">
                    <img src={carouselImage2} alt="Los Angeles" className="carousel-image"/>
                  </div>
                  <div className="offset-lg-1 col-md-6 text-column-align-center col-padding-top">
                    <div>
                      <div className="text-big text-padding-bottom-small">
                        Lorem lpsum
                      </div>
                      <div className="text-small">
                        Lorem lpsum is simply dummy text of ther printing and typesetting industry.
                        Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-5 col-md-6">
                    <img src={carouselImage3} alt="Los Angeles" className="carousel-image"/>
                  </div>
                  <div className="offset-lg-1 col-md-6 text-column-align-center col-padding-top">
                    <div>
                      <div className="text-big text-padding-bottom-small">
                        Lorem lpsum
                      </div>
                      <div className="text-small">
                        Lorem lpsum is simply dummy text of ther printing and typesetting industry.
                        Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-5 col-md-6">
                    <img src={carouselImage4} alt="Los Angeles" className="carousel-image"/>
                  </div>
                  <div className="offset-lg-1 col-md-6 text-column-align-center col-padding-top">
                    <div>
                      <div className="text-big text-padding-bottom-small">
                        Lorem lpsum
                      </div>
                      <div className="text-small">
                        Lorem lpsum is simply dummy text of ther printing and typesetting industry.
                        Lorem lpsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="carousel-indicators offset-md-6 col-md-6 ">
              <li data-target="#feedback" data-slide-to="0" className="active"></li>
              <li data-target="#feedback" data-slide-to="1"></li>
              <li data-target="#feedback" data-slide-to="2"></li>
              <li data-target="#feedback" data-slide-to="3"></li>
            </ul>
          </div>        
        </div>
      </div>
    )
  }
}
