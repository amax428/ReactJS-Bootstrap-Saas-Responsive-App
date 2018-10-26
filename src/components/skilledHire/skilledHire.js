import React, { Component } from 'react';
import './skilledHire.css';

export default class SkilledHire extends Component {
  render() {
    return (
      <div className="skilled-hire-page">
        <div className="opacity-background">
          <div className="container skilled-hire-main-part text-center">
              <div className="text-bigger text-padding-bottom-medium">
                  Modern day work takes up most of the day.<br/>
                  Why settle  for less?
              </div>
              <div className="text-big text-padding-bottom-medium">
                  Have Strong Hire find you the best fit for you today
              </div>
              <button className="normal-button text-normal">Make&nbsp;your&nbsp;next&nbsp;hire a&nbsp;strong&nbsp;one</button>
          </div>
        </div>
      </div>
    )
  }
}
