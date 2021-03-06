import React from 'react';
// import { SearchIcon } from '../shared/AppIcons';
import { SearchIcon } from './AppIcons';

function SearchForm(props) {
  const { handleSubmit, handleChange, searchString } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input
        placeholder="Search"
        type="text"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />
      {/* <button type="submit">Search</button> */}
      <button type="submit">
        <SearchIcon height="2rem" width="2rem" />
      </button>
    </form>
  );
}
export default SearchForm;