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



class App extends Component {

  state = {
    weatherType: 'summer',
    headerOffset: 0,
    descOffset: 0,
    textOpacity: 1,
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
        this.setState({ headerOffset: 0, descOffset: 0, weatherType: 'winter' });
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
    return (
      <div className={classes.App}>
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
            weatherType={this.state.weatherType} />
          <BackgroundContainer weatherType={this.state.weatherType} />
        </Swipeable>
        <Route path='/detail' exact component={Detail} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetOffers: () => dispatch(getOffers()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
