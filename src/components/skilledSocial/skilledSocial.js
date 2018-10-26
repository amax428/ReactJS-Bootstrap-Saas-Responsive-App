import React, { Component } from 'react';
import './skilledSocial.css';

export default class SkilledSocial extends Component {
  render() {
    return (
      <div className="skilled-social-page  text-column-align-center">
        <div className="container">
            <div className="col-md-6 col-lg-5 offset-md-6 offset-lg-7">
              <div className="text-bigger">
                <p>
                  Social&nbsp;proof&nbsp;is&nbsp;now Career&nbsp;Management
                </p>
              </div>
              <div className="text-normal">
                <p>
                  Lorem lpsum is simply dummy text of the printing and
                  typesetting industry.
                  Lorem lpsum has been industry's standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="text-align">
                <button className="normal-button text-small">Take action</button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
