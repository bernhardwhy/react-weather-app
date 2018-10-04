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
import localforage from 'localforage'


let datesArray = [];
let weatherIncrement = 0;


class App extends Component {

  state = {
    weatherType: 'summer',
    headerOffset: 0,
    descOffset: 0,
    textOpacity: 1,
    dateText: 'optimistic weather',
    tempText: null,
    weatherTypeText: null,
    weatherData: null,
  }

  componentDidMount() {
    localforage.getItem('weatherData', (err, value) => {
      this.setState({ weatherData: value });
      if (!value || !this.dateIsFresh(value)) {
        this.props.onGetOffers();
      }
    })
  }

  componentDidUpdate() {
    if (this.props.weather && !this.state.weatherData) {
      localforage.setItem('weatherData', this.props.weather, (err) => {
        localforage.getItem('weatherData', (err, value) => {
          this.setState({ weatherData: value });
        })
      });
    }
  }

  dateIsFresh = (localWeatherData) => {
    let localWeatherDay = new Date(localWeatherData.daily.data[0].time * 1000);
    let now = new Date();
    return now >= localWeatherDay;
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
          weatherType: this.state.weatherData.daily.data[weatherIncrement].icon,
          dateText: datesArray[weatherIncrement],
          tempText: this.state.weatherData.daily.data[weatherIncrement].temperatureHigh.toFixed(),
          weatherTypeText: this.state.weatherData.daily.data[weatherIncrement].summary,
        });
      }, 300);
      setTimeout(() => {
        this.setState({ textOpacity: 1 });
      }, 600);
    }
  }

  swipedDown = (e, deltaY, isFlick) => {
    console.log('swiped down');

  }

  render() {
    if (this.state.weatherData && datesArray.length === 0) {
      this.state.weatherData.daily.data.forEach(element => {
        var now = new Date(element.time * 1000);
        datesArray.push(now.toDateString());
        console.log(now, now.toDateString());
      });
    }


    return (
      <div className={classes.App} >
        {
          this.state.weatherData ?
            <Swipeable
              style={{ height: '100%', width: '100%' }}
              onSwipingLeft={this.swipingLeft}
              onSwipingRight={() => console.log('swipe right')}
              onSwiped={this.swiped}
              onSwipedDown={this.swipedDown} >

              <HeadingTextContainer
                leftHeaderOffset={this.state.headerOffset}
                leftDescOffset={this.state.descOffset}
                textOpacity={this.state.textOpacity}
                dateText={this.state.dateText}
                weatherTypeText={this.state.weatherTypeText}
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
