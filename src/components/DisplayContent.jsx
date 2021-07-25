import React, { useState } from "react";
import SearchResult from './SearchResult';

/**
 * Component Responsible for Displaying Content on to the screen
 * returns => Data Resulted from the Search
 * @component
 * @param {string} searchItem The seachItem on the screen  
 */
const DisplayContent = (props) => { 
    const [searchItem, setSearchItem] = useState();
  
    //user can change the search topic by manually type in
    const handleChange = (item) => { 
        if(item!==searchItem)
      setSearchItem(item);  
    };
    
        return (
            <div>
                <h3 className="display-4" title="topic of search term">TOPIC: <span className="badge badge-secondary">{props.search}</span></h3>
                <SearchResult key={props.search} value={props.search} onChange={handleChange} ></SearchResult>
            </div>
        );
};

export default DisplayContent;
