import React, { useState }from "react";

/**
 * Component for Displaying Search Bar.
 * returns => Search Bar along with the data entered in the search bar
 * @component
 * @param {string} searchItem Has the Data String Entered in the Search Bar 
 */

const SearchBar = (props) => {  
    const [searchItem, setSearchItem] = useState('');

  //user can change the search topic by manually type in
    const handleChange = (e) => { 
        setSearchItem(e.target.value);  
      };
 
      return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">Github GraphQL Demo</div>
            <div className="form-inline">
            <input  
              value={searchItem}
              onChange={handleChange}
              className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                onClick={() => props.onSearchChange(searchItem)}
            >Search</button>
            </div>
        </nav>
      );
  };

export default SearchBar;
