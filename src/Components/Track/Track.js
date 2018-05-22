import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props){
    super(props);
this.addTrack = this.addTrack.bind(this);
this.removeTrack = this.removeTrack.bind(this);
    }
  addTrack(){
    //console.log('here');
    this.props.onAdd(this.props.song);
  }
  removeTrack(){
    //console.log('remove here');
    this.props.onRemove(this.props.song);
  }
  renderAction(isRemoval){

    if(this.props.isRemoval===true){
return <a className="Track-action"onClick={this.removeTrack}>-</a>;
    }
    else{
return <a className="Track-action"onClick={this.addTrack}>+</a>;
    }
  }
  render() {
    return (
      <div className="Track">
      <div className="Track-information">

        <h3>{this.props.song.name}</h3>
        <p>{this.props.song.artist} | {this.props.song.album}</p>
      </div>

{this.renderAction()}
    </div>
  );
  }
}

export default Track;
