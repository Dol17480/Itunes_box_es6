import React from 'react'

class TunesSelector extends React.Component {
  getInitialState () {
    return { selectedIndex: undefined };
  }
  render () {
    const options = this.props.albums.map(function (album, index) {
      return (
        <option 
        value={index} 
        key={index}>{album.title.label}
        </option>)
    });
    return (
      <select 
      id="albums" 
      value={this.state.selectedIndex}
      onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }
  handleChange (event) {
    const newIndex = parseInt(event.target.value);
    this.setState({selectedIndex: newIndex});
    const album = this.props.albums[newIndex];
    this.props.selectAlbum(album);
  }
};

module.exports = TunesSelector;
