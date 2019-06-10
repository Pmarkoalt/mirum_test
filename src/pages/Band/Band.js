import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBand } from '../../api/bandApi';
import NotFoundPage from '../../shared/util/NotFoundPage';
import './band.css';


import {toggleBandStyle, updateHeader} from '../../redux/actions/bandActions';

const mapStateToProps = state => {
  return {
    band: state.band
  }
}

const mapDispatchToProps = dispatch => ({
  updateHeader: header => dispatch(updateHeader(header)),
  toggleBandStyle: isBandHeader => dispatch(toggleBandStyle(isBandHeader)),
});

class Band extends Component{
  constructor(props){
    super(props)
    this.state = {
      band: {},
      redirect: false
    }
  }

  componentDidMount(){
    const { match: { params } } = this.props;
    getBand(params.id)
    .then(data => {
      console.log(data);
      if (data) {
        this.setState({
          band: data
        });
        this.props.updateHeader(data.name);
        this.props.toggleBandStyle(true);
      } else {
        this.setState({
          redirect: true
        });
      }
    });
  }

  render(){
    if (this.state.redirect){
      return (<Redirect to='/404' />)
    } else {
      return(
        <div id="bandContainer">
          <div id="band_navContainer">
            <div><Link className="back" to={"/"}>Home</Link> / {this.state.band.name}</div>
          </div>
          <div id="band_imagesContainer">
            <div id="band_bigImage">
              <img id='band_wideImage' src={'/' + process.env.PUBLIC_URL + this.state.band.banner} alt="big_image" />
            </div>
            <div id="band_imageRow">
              <img className="band_rowImage" src={'/' + process.env.PUBLIC_URL + 'misc/r_cube.jpg'} alt="1" />
              <img className="band_rowImage" src={'/' + process.env.PUBLIC_URL + 'misc/r_cube.jpg'} alt="2" />
              <img className="band_rowImage" src={'/' + process.env.PUBLIC_URL + 'misc/r_cube.jpg'} alt="3" />
              <img className="band_rowImage" src={'/' + process.env.PUBLIC_URL + 'misc/r_cube.jpg'} alt="4" />
              <img className="band_rowImage" src={'/' + process.env.PUBLIC_URL + 'misc/r_cube.jpg'} alt="5" />
            </div>
          </div>
          <div id="band_textContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in sem convallis, consequat eros a, aliquam mi. Etiam et arcu sit amet felis posuere gravida ut laoreet est. Aenean nisi mauris, pulvinar at rhoncus ac, commodo sit amet metus. Morbi lobortis ut sapien vestibulum ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum semper commodo nibh sit amet mattis. Cras imperdiet orci luctus gravida cursus. Etiam lobortis dictum magna.
            </p>
            <p>
              Aenean ac sapien vel dolor gravida gravida eget et enim. Pellentesque eros nisi, laoreet in arcu id, tincidunt laoreet dolor. Ut mollis nisl ligula, convallis vehicula enim tempor sed. Vivamus convallis, eros in mattis interdum, sapien metus porttitor tortor, in ultricies mi purus eget ligula. Duis consequat sem sed urna iaculis sagittis. Sed vel velit nec nunc aliquam dignissim. Sed eu leo sed ipsum consectetur commodo. Etiam sagittis porttitor venenatis. Nulla facilisi. Quisque et pulvinar tortor. Donec euismod urna vel consequat pretium. In non odio consequat, finibus sem vel, bibendum enim.
            </p>
          </div>
        </div>
        )
    }
  }
}
const band = connect(
  mapStateToProps,
  mapDispatchToProps
)(Band)
export default band;
