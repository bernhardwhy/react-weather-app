import React, { Component } from 'react';
import classes from './BackgroundContainer.css';

const weatherTypeObject = {
    summer: {
        name: 'summerAnimationColor',
    },
    winter: {
        name: 'winterAnimationColor',
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
        let convertedWeatherType = 'partly-cloudy-night';
        switch (this.props.weatherType) {
            case 'partly-cloudy-night':
                convertedWeatherType = 'summer';
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
                convertedWeatherType = 'summer';
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
