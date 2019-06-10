import React from 'react';
import { connect } from 'react-redux'

import './header.css';

const mapStateToProps = state => {
  return {
    headerText: state.header,
    isBandView: state.isBandView
  }
}

function subHeader(props){
  if (!props.isBandView){
    return (
      <div id="subHeader">Click on your favorite band to learn more about them. Maybe you too can get very sad.</div>
    )
  } else {
    return;
  }
}

function Header(props){
  return(
    <div id="header">
        <div id="headerTitle"><strong>{props.headerText}</strong></div>
        {subHeader(props)}
    </div>
  )
}
const header = connect(
  mapStateToProps
)(Header)
export default header;
