import React, { Component } from 'react';
import SkilledSocial from '../skilledSocial';
import SkilledFast from '../skilledFast';
import './skilledSocialFast.css'

export default class SkilledSocialFast extends Component {
  render() {
    return (
      <div className="skilled-social-fast-page">
        <SkilledSocial />
        <SkilledFast />
      </div>
    )
  }
}
