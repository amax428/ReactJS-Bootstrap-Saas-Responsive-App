import React, { Component } from 'react';
import './skilledFire.css';

export default class SkilledFire extends Component {
  render() {
    return (
      <div className="skilled-fire-page text-column-align-center">
        <div className="container">
            <div className="col-md-6 col-lg-5">
              <div className="text-bigger">
                <p>
                  Real&nbsp;world&nbsp;proof is&nbsp;now Fire&nbsp;your&nbsp;Boss
                </p>
              </div>
              <div className="text-normal">
                <p>
                  The StrongHire community does not deal with jerks, power trips,
                  or dehumanized work environments so you do not have to as well.
                </p>
              </div>
              <button className="normal-button text-small">Take action</button>
            </div>
        </div>
      </div>
    )
  }
}
