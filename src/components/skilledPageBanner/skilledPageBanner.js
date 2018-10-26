import React, { Component } from 'react';
import './skilledPageBanner.css';

export default class SkilledPageBanner extends Component {
  render() {
    return (
      <div className="skilled-page-banner text-column-align-center">
        <div className="container">
          <div className="col-md-5">
            <div className="text-bigger">
              <p>
                For Skilled Professionals
              </p>
            </div>
            <div className="text-smaller">
              <p>
                You worked hard for your skill and<br/>
                deserve the best fit your workplace
              </p>
            </div>
            <button className="normal-button text-small">Get Started</button>
          </div>
        </div>
      </div>
    )
  }
}
