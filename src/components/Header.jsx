import React from 'react'; 
import { Link } from 'react-router-dom'; 

/**
 * Component responsible for displaying header content on to the screen.
 * URL Links to => GIT-HUB Docs && Associate LinkedIN Profile && Aspiration Bank
 * @component
 */

const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1"><a  href="https://www.aspiration.com/">Aspiration Bank</a> </div> 
        <Link to={{ pathname: "https://docs.github.com/en/graphql/reference/objects#topic" }} target="_blank"  className="ml1 no-underline black">
          GIT-HUB Docs
        </Link>
        <div className="ml1">|</div>
        <Link to= {{ pathname: "https://www.linkedin.com/in/abhinavpuskuru/"}} target="_blank" className="ml1 no-underline black">
          LinkedIN Profile
        </Link> 
      </div> 
    </div> 
  );
};

export default Header;
