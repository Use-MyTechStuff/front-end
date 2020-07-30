import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser, addNewItem } from "../actions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import UserTechList from "./RentalStuf/UserTechList";


import {
  Button,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment
} from "@material-ui/core";

const ColorButton = withStyles(theme => ({
  root: {
    width: '30%',
    color: "white",
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: "1rem auto .2rem auto"
  }
}));



const Dashboard = ({ addNewItem, getUser, user_id }) => {
  const classes = useStyles();
  const [addItem, setAddItem] = useState(false);
  const [item, setItem] = useState({
    name: "",
    daily_rate: "",
    description: "",
    img: "",
    availability: false,
    condition: "",
    location: ""
  });
  
  

  useEffect(() => {
    getUser(user_id);
  }, [user_id, getUser]);

  const Editing = () => {
    setAddItem(true);
  };

  const HandleChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const HandleSubmit = e => {
    console.log(item);
    addNewItem(user_id, item);
    setAddItem(false);
    getUser(user_id);
  };

  return (
    <div>
      <h1 color="secondary">Welcome to Use My Tech</h1>
      <h3>Below you can add your tech to rent out!</h3>
      {addItem ? (
        <></>
      ) : (
          <Button variant="contained" color="secondary" onClick={() => Editing()}>
            Add Item
          </Button>
        )}
      {addItem ? (
        <div className="form-container">
          <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
            <TextField
              required
              name="name"
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              onChange={HandleChange}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel required htmlFor="outlined-adornment-amount">
                Price
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                name="daily_rate"
                labelWidth={50}
                onChange={HandleChange}
              />
            </FormControl>
            <TextField
              name="condition"
              id="outlined-basic"
              label="Condition"
              variant="outlined"
              onChange={HandleChange}
            />
            <TextField
              name="location"
              id="outlined-basic"
              label="Location"
              variant="outlined"
              onChange={HandleChange}
            />
            <TextField
              name="description"
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={HandleChange}
            />
            <TextField
              name="img"
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              onChange={HandleChange}
            />
            <ColorButton
              className={classes.margin}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Submit
            </ColorButton>
          </form>
        </div>
      ) : (
          <></>
        )}
      <UserTechList />
      <div></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user_id: state.user,
    error: state.error
    
  };
};

export default connect(mapStateToProps, { getUser, addNewItem })(Dashboard);