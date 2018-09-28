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
        const themedStyling = [classes.bgAnimation, classes[weatherTypeObject[this.props.weatherType].name]].join(' ');

        return (
            <div style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ opacity: this.state.opacityVar }} className={themedStyling}></div>
            </div>
        )
    }
}

export default componentName
