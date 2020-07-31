import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from '../actions'

const LogOut = (props) => {
  const {push} = useHistory();

  const handleClick = () => {
    props.logout()
    localStorage.clear();
    push("/");
  };

  return (
    <Button
    style={{ height: "30px", marginLeft: "1em", marginTop: ".5em" }}
    variant="contained"
    color="primary"
    onClick={handleClick}
  >
    Log Out
  </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    success: state.loginReducer.success
  }
}

export default connect(mapStateToProps, {logOutAction})(LogOut);