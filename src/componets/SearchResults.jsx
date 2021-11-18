import React from 'react';


function SearchResults(props) {

    return (
        <div className="gallery">
            {props.images.map(pic => (
  <div key={pic.id} className="gif">
    <img src={pic.images.downsized_large.url} />
  </div>
            ))}
        </div>
    );
}

export default SearchResults;