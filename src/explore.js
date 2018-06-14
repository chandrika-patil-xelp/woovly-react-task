import React, { Component } from 'react';
import './explore.css';
import Cards from './cards.js';
import img1 from './images/img1.jpg';
import img2 from './images/09.jpg';
import img3 from './images/11.jpg';
import img4 from './images/12.jpg';
import img5 from './images/15.jpg';

// const API = 'https://hn.algolia.com/api/v1/search?query=';
// const DEFAULT_QUERY = 'redux';



var  imgarray = [];

export default class Explore extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hits: []
            
        }
    }
    componentDidMount() {
        fetch('https://www.woovly.com/exploreBucketList', {
            method: 'post',
            body: {"uid":null,"st":0,"lt":10,"tids":"","cids":"","isutype":"","str":"","utyp":"","isUFO":0,"bids":[],"flag":"1"}
          }).then((response) => {
            return response.json();
          }).then((data) => {
            console.log(data );
             this.setState({ hits: data.result })
          });
      }

    
    render() {
        const hits = this.state.hits;
        return (
        <div class="Parent1">
        {
            hits.map(hit => 
        {
            
             return <Cards bkt_name={hit.bkt_name} img = {hit.bkt_image != 'null' ? "//images.woovly.com/w_480/"+hit.bkt_image : img4}/>    
        }
            )
        }
        </div>
        );
    }
}