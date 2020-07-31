import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { getUser } from '../../actions';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom'

import {
    Button,
    TextField,
    FormControl,
    OutlinedInput,
    InputLabel,
    InputAdornment
} from "@material-ui/core";
import { axiosWithAuth } from "../../utils/axiosWithAuth";



const ColorButton = withStyles(theme => ({
    root: {
        width: "30%",
        color: "white"
    }
}))(Button);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: "1rem auto .2rem auto"
    }
}));

const UpdateItem = props => {
    const { push } = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    const [updateItem, setUpdateItem] = useState({
        name: "",
        daily_rate: "",
        description: "",
        img: "",
        availability: false,
        condition: "",
        location: ""
    });


    useEffect(() => {
        const itemToUpdate = props.userStuff.find(
            thing => `${thing.id}` === id
        );
        console.log('item to update', itemToUpdate)
        if (itemToUpdate) {
            setUpdateItem(itemToUpdate);
        }
    }, [props.userStuff, id]);

    const HandleChange = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "price") {
            value = parseInt(value, 10);
        }
        setUpdateItem({
            ...updateItem,
            [e.target.name]: value
        });
    };

    const HandleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/items/${id}`, updateItem)
            .then(res => {
                console.log('update res:', res);
                props.setIsEditing(false)
                props.getUser(props.user_id)
                push(`/user-page/${props.user_id}`);
            })
            .catch(err => {
                console.log(err.response);
            });
    };

    console.log(updateItem)

    return (
        <div className="form-container">
            <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
                <TextField
                    required
                    name="name"
                    id="outlined-basic"
                    label="Item Name"
                    variant="outlined"
                    value={updateItem.name}
                    onChange={HandleChange}
                />
                <FormControl fullWidth variant="outlined">
                    <InputLabel required htmlFor="outlined-adornment-amount">
                        Price
          </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        name="daily_rate"
                        labelWidth={50}
                        value={updateItem.daily_rate}
                        onChange={HandleChange}
                    />
                </FormControl>
                <TextField
                    name="condition"
                    id="outlined-basic"
                    label="Condition"
                    variant="outlined"
                    value={updateItem.condition}
                    onChange={HandleChange}
                />
                <TextField
                    name="location"
                    id="outlined-basic"
                    label="location"
                    variant="outlined"
                    value={updateItem.location}
                    onChange={HandleChange}
                />
                
                <TextField
                    name="description"
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    value={updateItem.description}
                    onChange={HandleChange}
                />
                <TextField
                    name="img"
                    id="outlined-basic"
                    label="Image URL"
                    variant="outlined"
                    value={updateItem.img}
                    onChange={HandleChange}
                />
                <ColorButton
                    className={classes.margin}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
        </ColorButton>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userStuff: state.userStuff,
        user_id: state.user
    };
};

export default connect(mapStateToProps, { getUser })(UpdateItem);