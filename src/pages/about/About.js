import React from 'react';
import './About.css'
// import {Container,Row,Col,Card, Carousel,Nav } from "react-bootstrap";
// import { NavLink,Link } from "react-router-dom";


function About() {
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img src='https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'alt=""/>
            </div>
            <div className="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img src='https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'alt=""/>
            </div>
            <div className="content">
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img src='https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt=""/>
            </div>
            <div className="content">
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default About;