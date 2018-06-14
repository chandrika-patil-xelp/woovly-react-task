import React, { Component } from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/09.jpg';
import img3 from './images/11.jpg';
import img4 from './images/12.jpg';
import img5 from './images/15.jpg';
import './cards.css';
import CardsContainer from "./cardsContainer.js"



export default class Cards extends React.Component{


    render() {
        return (
        <div className="Cards">
        <div className="bliName">{this.props.bkt_name}</div>
        
        <img src = {this.props.img} className="imgs" />
        <CardsContainer />
        </div>

        );
    }

   
}