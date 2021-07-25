import React, { useState } from "react";
import { gql, useQuery } from '@apollo/client';  
 
/**
 * Component responsible for querying GraphQL and retrieving Information to display on to the screen.
 * searchItem => Has the Data String Entered in the Search Bar
 * returns => Search Bar along with the data entered in the search bar
 * The Apollo platform is an implementation of GraphQL that can transfer data between the cloud (server) to the UI of our app . 
 * In fact, Apollo builds its environment in such a way that we can use it to handle GraphQL on the client as well as the 
 * server side of the application
 * @component
 * @param {string} GET_GIT_TOPICS The seachItem on the screen
 * Displays all the "topics" related to the term "react" by default, using the GitHub GraphQL API along with the stargazers.
 * A click on a topic will display the topics related to that topic along with the stargazers count.
 */


const  SearchResult = (props)  => {

  const GET_GIT_TOPICS = gql`
  query SearchTopics($search: String!) {
    search(query: $search, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            stargazers {
              totalCount
            }
            resourcePath
            repositoryTopics(first: 10) {
              totalCount
              nodes {
                topic {
                  name
                  stargazerCount
                  relatedTopics {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

    let searchItem = props.value;
    const [newTopic, setTopic] = useState(searchItem);
    let search;
    //initialise the search phrase - whether from user clicking on a topic or key in from navbar top
    if(searchItem===newTopic){
      search = `${searchItem} stars:>10000`; //only filter if stargazers are high to prevent junk
    }else{
      search = `${newTopic} stars:>10000`;
      searchItem = newTopic;
      props.onChange(newTopic);
    }

    //parsing the search phase into the gql query
    const { loading, error, data } = useQuery(GET_GIT_TOPICS,
      {
        variables: {search}
      });
  
    if (loading){ 
      return (
        <div>
          <i className="fa fa-spinner fa-spin mr-4"/>
          <span>...Searching for {search}</span>
        </div>
      );
    }
    if (error) return `Error! ${error.message}`; 
    
    const displayData = () => {
      if (data.search.edges.length === 0){ 
        return (<div> No Data Found for   {searchItem}</div>)
      }
      else {
        return(<React.Fragment>
          {data && data.search.edges &&  data.search.edges.map((edge, index) => (
            <ul className="list-group"  key={index}>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <h5>{edge.node.resourcePath}</h5>
                  <span className="badge badge-success badge-pill badge-star"><i className="fa fa-star mr-2" aria-hidden="true" />{edge.node.stargazers.totalCount}</span>
                </div>
                <div>
                  Related Topics:
                  {edge.node.repositoryTopics.nodes.map((node,j)=>(
                    <button key={j}
                      onClick={() => setTopic(node.topic.name)}
                    type="button" className="btn btn-outline-info btn-sm mx-1 my-1">{node.topic.name}  <span className="badge badge-light badge-pill"><i className="fa fa-star m1-2" aria-hidden="true" />{node.topic.stargazerCount}</span></button>
                    ))}
                </div>
              </li>
            </ul>
          ))}
        </React.Fragment>
        )};
    }
    return (
      displayData()
    );
  }

export default SearchResult;