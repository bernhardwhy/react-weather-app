import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOffers } from './store/actions/actions';
import logo from './logo.svg';
import classes from './App.css';
import { Route, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Detail from './Detail/Detail';
import BackgroundContainer from './components/BackgroundContainer/BackgroundContainer';
import HeadingTextContainer from './components/HeadingTextContainer/HeadingTextContainer';
import Swipeable from 'react-swipeable'


let datesArray = [];
let weatherIncrement = 0;


class App extends Component {

  state = {
    weatherType: 'summer',
    headerOffset: 0,
    descOffset: 0,
    textOpacity: 1,
    dateText: 'sontag und sio',
    tempText: '12'
  }

  componentDidMount() {
    this.props.onGetOffers();
  }

  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log("You're Swiping...", e, deltaX, deltaY, absX, absY, velocity)
  }

  swipingLeft = (e, absX) => {
    this.setState({ headerOffset: absX });
    if (absX >= 30) {
      this.setState({ descOffset: absX - 30 });
    }
  }

  swiped = (e, deltaX, deltaY, isFlick, velocity) => {
    // console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity)
    if (deltaX > 0) {
      this.setState({ textOpacity: 0 });
      setTimeout(() => {
        weatherIncrement = weatherIncrement <= 6 ? weatherIncrement + 1 : 0;
        this.setState({
          headerOffset: 0,
          descOffset: 0,
          weatherType: this.props.weather.daily.data[weatherIncrement].icon,
          dateText: datesArray[weatherIncrement],
          tempText: this.props.weather.daily.data[weatherIncrement].temperatureHigh.toFixed()
        });
      }, 300);
      setTimeout(() => {
        this.setState({ textOpacity: 1 });
      }, 600);
    }
  }

  swipedUp(e, deltaY, isFlick) {
    console.log("You Swiped Up...", e, deltaY, isFlick)
  }

  render() {
    if (this.props.weather && datesArray.length === 0) {
      this.props.weather.daily.data.forEach(element => {
        var now = new Date(element.time * 1000);
        console.log(element.icon);
        console.log(now.toDateString());
        datesArray.push(now.toDateString());
      });
    }




    return (
      <div className={classes.App} >
        {
          this.props.weather ?
            <Swipeable
              style={{ height: '100%', width: '100%' }}
              onSwipingLeft={this.swipingLeft}
              onSwipingRight={() => console.log('swipe right')}
              onSwiped={this.swiped}
              onSwipedUp={this.swipedUp} >

              <HeadingTextContainer
                leftHeaderOffset={this.state.headerOffset}
                leftDescOffset={this.state.descOffset}
                textOpacity={this.state.textOpacity}
                dateText={this.state.dateText}
                tempText={this.state.tempText} />
              <BackgroundContainer weatherType={this.state.weatherType} />
            </Swipeable> : null
        }
        < Route path='/detail' exact component={Detail} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetOffers: () => dispatch(getOffers()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
