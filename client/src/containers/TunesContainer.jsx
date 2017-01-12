import React from 'react'
import {Link} from 'react-router'
import TunesSelector from './components/TunesSelector'
import TunesDetail from './components/TunesDetail'

class TunesContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.setFocusAlbum = this.setFocusAlbum.bind(this)
    this.setState = {
      albums: [],
      focusAlbum: null 
    };
  }
  componentDidMount () {
    const url = "https://itunes.apple.com/gb/rss/topalbums/limit=10/genre=20/explicit=true/json"
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = function (){
      const data = JSON.parse(request.responseText)
    this.setState({
      albums: data.feed.entry, 
      focusAlbum: data[0]
    });
    }
    request.send(null)
  }

render () {
      return (
        <div>
          <h2>Top Alternative Albums</h2>
          <TunesSelector 
          albums={this.state.albums}
          selectAlbum={this.setFocusAlbum}
          />
          <TunesDetail 
          album={this.state.focusAlbum}
          handleClick={this.handleClick}
          />
        </div>
      )
    }
    setFocusAlbum (album) {
      this.setState({focusAlbum: album})
    }
  }

export default TunesContainer



// var TunesContainer = React.createClass({
// componentDidMount: function () {
//   var url = "https://itunes.apple.com/gb/rss/topalbums/limit=10/genre=20/explicit=true/json";
//   var request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.onload = function (){
//     var data = JSON.parse(request.responseText);
//   this.setState({
//     albums: data.feed.entry, 
//     focusAlbum: data[0]
//   });
//   }.bind(this);
//   request.send(null);
// },


//   handleClick: function(e){
//     e.preventDefault();
//   },

//   render: function () {
//     return (
//       <div>
//         <h2>Top Alternative Albums</h2>
//         <TunesSelector 
//         albums={this.state.albums}
//         selectAlbum={this.setFocusAlbum}
//         />
//         <TunesDetail 
//         album={this.state.focusAlbum}
//         handleClick={this.handleClick}
//         />
//       </div>
//     );
//   },
//   setFocusAlbum: function (album) {
//     this.setState({focusAlbum: album})
//   }
// });

// module.exports = TunesContainer;*/
