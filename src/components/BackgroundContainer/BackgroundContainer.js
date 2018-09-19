import React, { Component } from 'react'

export class componentName extends Component {
    render() {
        return (
            <div>
                LayoutComponent {this.props.season} <hr></hr>
                {this.props.disabled ? 'enabled ' : 'disabled'}
            </div>
        )
    }
}

export default componentName
