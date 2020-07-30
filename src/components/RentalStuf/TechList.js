import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../actions";

import CircularProgress from "@material-ui/core/CircularProgress";
import TechItem from "./TechItem";

const TechList = ({ getTech, stuff, error }) => {
  useEffect(() => {
    getTech();
  }, [getTech]);

  return (
    <div>
      <h1>Items for Rent</h1>
      {error ? (
        <div className="error">
          <CircularProgress disableShrink />
          {error}
        </div>
      ) : (
        <div className="user-cards">
          {stuff.map(tech => (
            <TechItem key={tech.id} tech={tech} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stuff: state.stuff,
    error: state.error
  };
};

export default connect(mapStateToProps, { getTech })(TechList);