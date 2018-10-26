import React, {Component} from 'react';
import HomeCulture from '../homeCulture';
import HomeCareer from '../homeCareer';
import HomeSocial from '../homeSocial';
import './homeCultureCareerSocial.css'

export default class HomeCultureCareerSocial extends Component {
    render() {
        return (
            <div className="home-culture-career-social-page">
                <HomeCulture />
                <HomeCareer />
                <HomeSocial />
            </div>
        )
    }
}
