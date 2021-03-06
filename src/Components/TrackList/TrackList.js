import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';
class TrackList extends Component {

  render() {
   let tracks = this.props.tracks.map(item =>{
     return <Track song={item} onAdd={this.props.onAdd} onRemove ={this.props.onRemove} isRemoval={this.props.isRemoval} />
   });

    return (
      <div className="TrackList">
      {tracks}
      </div>
    );
  }
}

export default TrackList;
