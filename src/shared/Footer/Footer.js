import React from 'react';
import { connect } from 'react-redux'
import './footer.css';

const mapStateToProps = state => {
  return {
    isBandView: state.isBandView
  }
}

function Footer(props){
    return(
      <div id="footer">
          <div id="footer_container" className={props.isBandView ? "foot_tight" : "foot_wide"}>
            <div id="footerText"> &#169; 2019 </div>
          </div>
      </div>
    )
}

const footer = connect(
  mapStateToProps
)(Footer)
export default footer;
