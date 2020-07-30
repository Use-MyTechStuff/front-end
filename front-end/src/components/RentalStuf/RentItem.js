import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { rent } from "../../actions";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { Paper, Button, Checkbox } from "@material-ui/core";


const RentItem = ({ rent }) => {
  const history = useHistory();
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
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
  }, [id]);

  const HandleChange = e => {
    e.persist();
    console.log('checked', e.target.name);
    setChecked(e.target.checked);
    let value = e.target.checked;
    if (e.target.name === "rent") {
      value = parseInt(value, 10);
    }
    setItem({
      ...item,
      [e.target.name]: value
    });
  };

  console.log(item);

  const HandleRent = (user_id, id, item) => {
    rent(user_id, id, item, history);
  };

  return (
    <div>
      <Paper elevation={3}>
        <h1>{item.name}</h1>
        <img src={item.img} alt={item.name} />
        <h3>Price: ${item.price}</h3>
        <div>
          <p>Condition: {item.condition}</p>
          <p>Location: {item.location}</p>
          <p>{item.description}</p>
        </div>
        <Checkbox
          name="rented"
          checked={checked}
          onChange={HandleChange}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Button
          size="small"
          color="secondary"
          onClick={() => HandleRent(item.user_id, item.id, item)}
        >
          Rent
        </Button>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { rent })(RentItem);