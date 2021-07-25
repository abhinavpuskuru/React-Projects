import React,  { useState } from 'react'; 
import Header from './components/Header'; 
import SearchBar from './components/SearchBar'; 
import DisplayContent from "./components/DisplayContent";

/**
 * Root level component.
 * @component
 * @param {string} searchItem The seachItem on the screen = By Default it's 'React' 
 * 
 */

const App = () => {
 
  const [searchItem, setSearchItem] = useState('React');

  const handleSearchChange = (key) => { 
    setSearchItem(key);  
  }

  return (
    
    <div className="center w85" >
       <Header />
        <SearchBar searchPhrase={searchItem} onSearchChange={handleSearchChange}></SearchBar>
          <div className="ph3 pv1 background-gray">
            <DisplayContent search={searchItem}></DisplayContent> 
          </div>
      </div> 
  );
} 

export default App;
