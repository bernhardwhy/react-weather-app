import React, { Component } from 'react';
import classes from './BackgroundContainer.css';

const weatherTypeObject = {
    summer: {
        name: 'summerAnimationColor',
    },
    winter: {
        name: 'winterAnimationColor',
    },
    hotSummer: {
        name: 'hotSummerAnimationColor',
    },
    foggy: {
        backgroundColor: '#707579',
        name: 'foggyAnimationColor',
    },
    rainy: {
        backgroundColor: '#08111c',
        name: 'rainyAnimationColor'
    },
}

export class componentName extends Component {

    state = {
        opacityVar: 1
    }

    render() {
        let convertedWeatherType = 'summer';
        // if (this.props.weatherType === 'clear-day' ||
        //     this.props.weatherType === 'clear-night' ||
        //     this.props.weatherType === 'rain' ||
        //     this.props.weatherType === 'snow' ||
        //     this.props.weatherType === 'sleet' ||
        //     this.props.weatherType === 'wind' ||
        //     this.props.weatherType === 'fog' ||
        //     this.props.weatherType === 'cloudy' ||
        //     this.props.weatherType === 'partly-cloudy-day' ||
        //     this.props.weatherType === 'partly-cloudy-night'
        // ) {
        //     convertedWeatherType = 'winter';
        // }
        switch (this.props.weatherType) {
            case 'partly-cloudy-night':
                convertedWeatherType = 'hotSummer';
                break;
            case 'partly-cloudy-day':
                convertedWeatherType = 'summer';
                break;
            case 'snow':
                convertedWeatherType = 'winter';
                break;
            case 'clear-day':
                convertedWeatherType = 'summer';
                break;
            case 'fog':
                convertedWeatherType = 'foggy';
                break;
            case 'rain':
                convertedWeatherType = 'rainy';
                break;

            default:
                convertedWeatherType = 'foggy';
                break;
        }
        const themedStyling = [classes.bgAnimation, classes[weatherTypeObject[convertedWeatherType].name]].join(' ');

        return (
            <div style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ opacity: this.state.opacityVar }} className={themedStyling}></div>
            </div>
        )
    }
}

export default componentName
