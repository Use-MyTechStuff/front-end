import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom'
import { connect } from "react-redux";

import UpdateItem from "./UpdateItem";

import { Paper, Button } from "@material-ui/core";


const EditItem = ({user_id}) => {
    const {push} = useHistory();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
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
        axiosWithAuth()
            .get(`/api/items/${id}`)
            .then(res => {
                console.log(res);
                setItem(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });
    }, [id, user_id]);

    const HandleDelete = item_id => {
        axiosWithAuth()
            .delete(`/api/items/${item_id}`)
            .then(res => {
                console.log(res);
                push(`/user-page/${user_id}`);
            })
            .catch(err => {
                console.log(err.response);
            });
    };

    console.log(item);

    return (
        <div>
            <Paper elevation={3}>
                <h1>{item.name}</h1>
                <img src={item.img} alt={item.name} />
                <h3>Daily rate: ${item.daily_rate}</h3>
                <div>
                    <p>Condition: {item.condition}</p>
                    <p>Location: {item.location}</p>
                    <p>{item.description}</p>
                    
                </div>
                {isEditing ? (
                    <UpdateItem setIsEditing={setIsEditing} item_id={id} />
                ) : (
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => setIsEditing(true)}
                        >
                            Update
                        </Button>
                    )}

                <Button size="small" color="primary" onClick={() => HandleDelete(id)}>
                    Delete
        </Button>
            </Paper>
        </div>
    );
};
const mapStateToProps = state => {
    return {
     user_id: state.user
    };
  };
  
  export default connect(mapStateToProps, {  })(EditItem);
