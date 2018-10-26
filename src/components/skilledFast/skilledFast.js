import React, { Component } from 'react';
import fastImage from '../../assets/video-proof.png';
import {YouTubePlayer} from 'react-video-players';
import './skilledFast.css';

export default class SkilledFast extends Component {
  render() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(w);
    return (
      <div className="skilled-fast-page text-column-align-center">
        <div className="container">
            <div className="col-lg-5 col-md-6 text-column-align-center">
              <div>
                <div className="text-bigger">
                  <p>
                    Fast&nbsp;action&nbsp;perks is&nbsp;now Real&nbsp;world&nbsp;proof
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
            <div className="image-part">
              <img src={fastImage} />
            </div>
            <div className="video-player">
				      <YouTubePlayer videoId="Afn1BOuoxik?enablejsapi=1&rel=0&modestbranding=1"/>
      		  </div>
          </div>
      </div>
    )
  }
}
