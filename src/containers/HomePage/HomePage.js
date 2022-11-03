import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Session/Specialty';
import MedicalFacility from './Session/MedicalFacility';
import OutstandingDoctor from './Session/OutstandingDoctor';
import HandBook from './Session/HandBook';
import About from './Session/About';
import HomeFooter from './HomeFooter';
import'./HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return (
            <div>
                <HomeHeader />
                <Specialty settings={settings}/>
                <MedicalFacility settings={settings}/>
                <OutstandingDoctor settings={settings}/>
                <HandBook settings={settings}/>

                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
