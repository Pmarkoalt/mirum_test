import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Carousel }  from '../../components';
import './home.css';

import {toggleBandStyle, updateHeader} from '../../redux/actions/bandActions';

const mapStateToProps = state => {
  return {
    band: state.band
  }
}

const mapDispatchToProps = dispatch => ({
  updateHeader: header => dispatch(updateHeader(header)),
  toggleBandStyle: isBandHeader => dispatch(toggleBandStyle(isBandHeader))
});

class Home extends Component{

  componentDidMount(){
    this.props.updateHeader("SAD 80'S BANDS");
    this.props.toggleBandStyle(false);
  }

  render(){
    return(
      <div id="home">
          <Carousel />
      </div>
    )
  }
}

const home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
export default home;