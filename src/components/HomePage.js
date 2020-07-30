import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const innerStyle={}
  const bars={height: '6px', background: 'linear-gradient(90deg, rgba(0,0,0) 0%, rgba(105,105,105) 50%, rgba(0,0,0) 100%)', width: '50vw', verticalAlign: 'center', display: 'inline-block'}
  return (
    <div style={innerStyle}>
      <h1>Pluralsight Administration</h1>
      <div style={{textAlign: 'center'}}><div style={bars} /><h1 style={{fontSize:'2em'}}>Hullo Woorld</h1><div style={bars} /></div>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
      <Link to="portfolio" className="btn btn-primary">
        My Work
      </Link>
    </div>
  );
}

export default HomePage;
