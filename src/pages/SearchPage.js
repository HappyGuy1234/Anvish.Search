import React, { useState } from "react";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSearchterm } from "../action/SearchAction";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    props.setSearchterm(input);
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {props.hideButton ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
           Anvish Search
          </Button>
          
        </div>
      ) : (
        <div className="search_buttonshidden">
          <Button type="submit" onClick={search} variant="outlined">
            
          </Button>
          
        </div>
      )}
    </form>
  );
};

const mapDistachToProps = (dispatch) => {
  return {
    setSearchterm: bindActionCreators(setSearchterm, dispatch)
  };
};

const mapStateToProps = (state) => {
  return {
    ...state,
    term: state && state.term
  };
};

export default connect(mapStateToProps, mapDistachToProps)(SearchPage);
