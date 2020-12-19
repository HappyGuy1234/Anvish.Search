import React from "react";
import { connect } from "react-redux";
import GoogleSearch from "./GoogleSearch";
import ResponseData from "./Response";
import { Link } from "react-router-dom";
import "./Search.css";
import SearchPage from "../pages/SearchPage";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Search = (props) => {
  // Live Api
  const { data } = GoogleSearch(props.term);
  const term = props.term;
  // Mock API
  // const data = ResponseData;
  // console.log("dara", data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://codeprojects.org/_npr1evLUptrCsvHdFWd9kcsA5TN7gwLQe-LpSg8OKo/PowerPoint-Slide-Show----ANVISH--22-09-2020-11_31_49-(2).png"
            alt="googleImage"
          width="120"/>
        </Link>
        <div className="searchPage_headerbody">
          <SearchPage hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                
                
              </div>
              <div className="searchPage_option">
              <DescriptionIcon/>
              <Link to="/search">Web</Link>
                 </div>
              <div className="searchPage_option">
                 </div>
              <div className="searchPage_option">
                 </div>
              <div className="searchPage_option">
                
              </div>
              <div className="searchPage_option">
                
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                
              </div>
              <div className="searchPage_option">
                <Link to="/settings"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result" key={item.snippet}>
              <a className="searchPae__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    term: state.reducerSearch.term
  };
};

export default connect(mapStateToProps)(Search);
