import React, { Component } from 'react'
import classes from './HeadingTextContainer.css'

export class componentName extends Component {

    render() {
        let translateprops = 'translateX(' + this.props.leftHeaderOffset + ')'
        let calculatedOpacity = 1;
        const calculateOpacity = (offset) => {
            if (offset > 0 && offset < 100) {
                return (100 - offset) * 0.01;
            } else if (offset > 100) {
                return 0;
            }
        }

        return (
            <div className={classes.HeaderContainer}>
                <div className={classes.TextWrapper}>
                    {this.props.tempText ?
                        <p style={{
                            transition: '.3s ease all',
                            transform: `translateX(-${this.props.leftHeaderOffset}px)`,
                            opacity: this.props.textOpacity === 0 ? 0 : calculateOpacity(this.props.leftHeaderOffset)
                        }}
                            className={classes.HeaderText}>
                            {this.props.tempText}°
                                    </p>

                        : null}

                    <p style={{
                        transition: '.3s ease all',
                        transform: `translateX(-${this.props.leftDescOffset}px)`,
                        opacity: this.props.textOpacity === 0 ? 0 : calculateOpacity(this.props.leftDescOffset)
                    }}
                        className={classes.DateText}>
                        {this.props.dateText}
                    </p>
                    {this.props.weatherTypeText ?
                        <p style={{
                            transition: '.3s ease all',
                            transform: `translateX(-${this.props.leftHeaderOffset}px)`,
                            opacity: this.props.textOpacity === 0 ? 0 : calculateOpacity(this.props.leftHeaderOffset)
                        }}
                            className={classes.WeatherType}>
                            {this.props.weatherTypeText}
                        </p>
                        : null}
                </div>
            </div>
        )
    }
}

export default componentName
