import React from 'react';
import { Link } from 'react-router-dom'
import './notfoundpage.css';

function NotFoundPage(){
    return(
      <div id="notFound">
        <div id="notFoundNav">
          <Link to={'/'} id="notFoundBack"> Back </Link>
        </div>
        <div id="notFoundContent">
          <h1 id="errorText"> 404 </h1>
          <h5 id="errorSubText">This page does not exist</h5>
          <h5>...or maybe the json-server isn't running. Make sure it is running in the background.</h5>
        </div>
      </div>
    )
}

export default NotFoundPage;
