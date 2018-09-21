import React, { Component } from 'react';


const weatherTypeObject = {
    summer: {
        backgroundColor: '#5c9fc4',
        polygonColor: '#f7d53b',
    },
    winter: {
        backgroundColor: '#5c9fc4',
        polygonColor: 'white',
    },
    hotSummer: {
        backgroundColor: '#fa9917',
        polygonColor: '#d74240',
    },
    foggy: {
        backgroundColor: '#707579',
        polygonColor: '#484b4f',
    },
    rainy: {
        backgroundColor: '#08111c',
        polygonColor: '#707579',
    },
}

export class componentName extends Component {
    render() {
        // { this.props.weatherType ? console.log(weatherTypeObject[this.props.weatherType].polygonColor) : null }

        return (
            <div style={{ overflow: 'hidden', height: '100%' }}>
                {/* LayoutComponent {this.props.season} <hr></hr>
                {this.props.disabled ? 'enabled ' : 'disabled'} */}
                {this.props.weatherType ?
                    <svg height="100%" viewBox="0 0 750.5 1334.5">
                        <rect width="750" height="1334.5" fill={weatherTypeObject[this.props.weatherType].backgroundColor} />
                        <path d="M750.5,1036.5v298H.5v-618Zm-353.91-169,353.91,151v-302Z" fill={weatherTypeObject[this.props.weatherType].polygonColor} />
                    </svg>
                    : null
                }
            </div>
        )
    }
}

export default componentName
