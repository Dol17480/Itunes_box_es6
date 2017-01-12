import React from 'react'

const TunesDetail = (props) => {
  if (!props.album) {
    return <h4>No album selected</h4>
  }
  return (
    <div className='album-detail'>
    <h3>
      {props.album.title.label}
    </h3>
    <img src={props.album["im:image"][2].label }/>
    </div>
  );
};

export default TunesDetail;

