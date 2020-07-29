import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom'

import UpdateItem from "./UpdateItem";

import { Paper, Button } from "@material-ui/core";


const EditItem = () => {
    const {push} = useHistory();
    const { id, user_id } = useParams();
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
            .get(`/users/${user_id}/items/${id}`)
            .then(res => {
                console.log(res);
                setItem(res.data[0]);
            })
            .catch(err => {
                console.log(err.response);
            });
    }, [id, user_id]);

    const HandleDelete = item_id => {
        axiosWithAuth()
            .delete(`/users/${user_id}/items/${item_id}`)
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

export default EditItem;