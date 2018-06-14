import React, { Component } from 'react';
import './cards.css';


export default class CardsContainer extends Component{
  constructor(props){
 super(props);
 this.state = {
    first:true,
    second:false
 };
  }
  handleClick(){
      this.setState({first:!this.state.first,second:!this.state.second})
  }
    render(){
        return(
            <div class="row">
            {this.state.first && (
            <div className="likeIcon" onClick={()=>this.handleClick()}  ></div>
            )}
            {this.state.second && (
            <div className="likeIconGrey" onClick={()=>this.handleClick()} ></div>
            )}
            <span className="">2 Likes</span>
            
            </div>
        );
    }
}