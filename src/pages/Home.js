import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchPage from "./SearchPage";


const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft"></div>
        <div className="home_headerRight">
      
        </div>
      </div>
      <div className="home_body">
        <center>
          <img
            className="home_bodyImage"
            src="https://codeprojects.org/_npr1evLUptrCsvHdFWd9kcsA5TN7gwLQe-LpSg8OKo/PowerPoint-Slide-Show----ANVISH--22-09-2020-11_31_49-(2).png"
            alt="googleImage"
            width="180"
          />
          
          <SearchPage hideButton />
        </center>
        
      </div>
    </div>
  );
};

export default Home;
