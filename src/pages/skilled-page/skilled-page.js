import React, { Component } from 'react';
import SkilledPageBanner from '../../components/skilledPageBanner';
import SkilledOffer from '../../components/skilledOffer';
import SkilledHire from '../../components/skilledHire';
import SkilledQualification from '../../components/skilledQualification';
import SkilledFire from '../../components/skilledFire';
import SkilledSocialFast from '../../components/skilledSocialFast';
import './skilled-page.css';

export default class SkilledPage extends Component {
  render() {
    return (
      <div className="skilled-page">
        <SkilledPageBanner />
        <SkilledOffer />
        <SkilledHire />
        <SkilledQualification />
        <SkilledFire />
        <SkilledSocialFast />
      </div>
    )
  }
}
