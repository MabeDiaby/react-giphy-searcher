import React from 'react';
import App from '../App';


function SearchForm(props) {
  const {handleSubmit, handleChange, searchString} = props
    return (
      // <form className="form-horizontal">
        // <input placeholder="Search" type="text" name="searchString" required />
        <form onSubmit = {handleSubmit} className="form-horizontal">
          <input 
          placeholder = "Search"
          type = "text"
          name = "searchString"
          required
          onChange = {handleChange}
          value = {searchString}
          />
        <button type="submit">Search</button>
      </form>
    );
  }
 
export default SearchForm;