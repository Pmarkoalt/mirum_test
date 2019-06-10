import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons'

import { getAllBands } from '../../api/bandApi';
import './carousel.css';

import { pageSelect } from '../../redux/actions/bandActions';


const mapStateToProps = state => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = dispatch => ({
  pageSelect: page => dispatch(pageSelect(page)),
});

class Carousel extends Component{
    constructor(props){
      super(props)
      this.state = {
        allBands: [],
        currThree: [],
      }
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
      this.updateCurrThree = this.updateCurrThree.bind(this);
      this.renderThreeLogos = this.renderThreeLogos.bind(this);
    }

    componentDidMount(){
      getAllBands()
      .then(data => {
        this.setState({
          allBands: data,
        });
        this.updateCurrThree(this.props.page);
      })
    }
    previous(){
      if (this.props.page === 1) {
        this.updateCurrThree(3);
      } else {
        this.updateCurrThree(this.props.page - 1);
      }
    }
    next() {
      if (this.props.page === 3) {
        this.updateCurrThree(1);
      } else {
        this.updateCurrThree(this.props.page + 1);
      }
    }

    updateCurrThree(page) {
      page = page ? page : 1;
      let firstImg;
      switch(page){
        case 1: 
          firstImg = 0;
          break;
        case 2:
          firstImg = 3;
          break;
        case 3:
          firstImg = 6;
          break;
        default:
          firstImg = 3;
      }
      this.props.pageSelect(page);
      this.setState({
        currThree: this.state.allBands.slice([firstImg], [firstImg + 3]),
      });
    }
  
    renderThreeLogos() {
      if (this.state.currThree.length === 0) {return <h5>Loading</h5>}
      const images = this.state.currThree.map((band, index) => 
        <div key={index} className="cardContainer">
          <Link to={'/band/' + band.id} > 
            <img src={process.env.PUBLIC_URL + band.logo} alt={band.slug_name} className="bandLogo" /> 
          </Link>
          <div className="bandTitle"><strong>{band.name}</strong></div>
          <div className="bandDescription">{band.description}</div>
        </div>
      );
      return (
        <div id="imagesContainer">
          {images}
        </div>
      );
    }
  
    render(){
      return(
        <div id="carousel">
            <FontAwesomeIcon className="carousel_arrow" icon={faAngleLeft} onClick={this.previous} size="5x" alt="back"/>
            <div id="carousel_container">
              {this.renderThreeLogos()}
              <div id="carousel_button_container">
                <FontAwesomeIcon className="carousel_page" icon={this.props.page === 1 ? solidCircle: regularCircle} onClick={e => this.updateCurrThree(1)} size="1x" alt="back"/>
                <FontAwesomeIcon className="carousel_page" icon={this.props.page === 2 ? solidCircle: regularCircle} onClick={e => this.updateCurrThree(2)} size="1x" alt="back"/>
                <FontAwesomeIcon className="carousel_page" icon={this.props.page === 3 ? solidCircle: regularCircle} onClick={e => this.updateCurrThree(3)} size="1x" alt="back"/>
              </div> 
            </div>
            <FontAwesomeIcon className="carousel_arrow" icon={faAngleRight} onClick={this.next} size="5x" alt="next"/>
        </div>
      )
    }
}

const carousel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel)
export default carousel;