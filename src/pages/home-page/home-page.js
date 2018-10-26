import React, { Component } from 'react'
import HomePageBanner from '../../components/homePageBanner';
import HomeCharacter from '../../components/homeCharacter';
import HomeCultureCareerSocial from '../../components/homeCultureCareerSocial';
import HomeSpecial from '../../components/homeSpecial';
import HomeSay from '../../components/homeSay';
import './home-page.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HomePageBanner />
        <HomeCharacter />
        <HomeCultureCareerSocial />
        <HomeSpecial />
        <HomeSay />
      </div>
    )
  }
}
