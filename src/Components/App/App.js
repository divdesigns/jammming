import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks:[]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
                this.savePlaylist = this.savePlaylist.bind(this);
                          this.search = this.search.bind(this);
                             Spotify.getAccessToken();

}
addTrack(track){

if( this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id))
{
  return;
}
else {
this.state.playlistTracks.push(track);
this.setState({
  playlistTracks : this.state.playlistTracks,

});

}
}

removeTrack(track){
let remove = this.state.playlistTracks.filter(savedTrack => savedTrack.id);
this.state.playlistTracks.pop(track);
this.setState({
  playlistTracks : this.state.playlistTracks
});
}

updatePlaylistName(name){

  this.setState({playlistName:name});
  console.log(this.state.playlistName);
}
savePlaylist(){

  Spotify.savePlaylist(name,trackList);
let name = this.state.playlistName;

const trackList = [this.state.playlistTracks.map(track => track.uri)];

}
search(term){

  Spotify.search(term)
       .then(tracks => {
         this.setState({ searchResults: tracks });
       });
     console.log(term);


}

  render() {
     Spotify.getAccessToken();
    return (
      <div>
    <h1>Ja<span class="highlight">mmm</span>ing</h1>
    <div class="App">
      <SearchBar onSearch={(item)=> this.search(item)}  />
      <div class="App-playlist">
        <SearchResults
        tracks={this.state.searchResults}
        onAdd={(item)=> this.addTrack(item)} />
  <Playlist
  playListName={this.state.playlistName}
 playListTracks={this.state.playlistTracks}
 onRemove={(item)=> this.removeTrack(item)}
 onNameChange={(item)=> this.updatePlaylistName(item)}
 onSave={(item)=> this.savePlaylist(item)} />

      </div>
    </div>
  </div>
    );
  }
}

export default App;
