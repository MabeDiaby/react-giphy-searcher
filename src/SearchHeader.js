import React from 'react';
import logo from './giphy-searcher-logo.svg'
// import logo from './giphy-searcher-logo'
function SearchHeader({lastSearch}) {
    return (
        <header>
            <h1>Giphy Searcher</h1>
            <div className="brand">
                <img src={logo} alt="" />
                <h1>Giphy Searcher</h1>
            </div>
            <p className="muted">
                Showing results for {lastSearch}<strong></strong>
            </p>
        </header>
    );
}

export default SearchHeader;