import React from 'react';


function SearchResults(props) {

    return (
        <div className="gallery">
            {props.images.map((pic) => 
            <div> 
                <img src={pic.url} />
            </div>
            )}
        </div>
    );
}

export default SearchResults;