import React from "react";
import { connect } from "react-redux";

import UserItems from "./UserItems.js";

const UserTechList = ({ userStuff }) => {
  return (
    <div>
      <h2>My Stuff for Rent</h2>
      <div className='user-cards'>
        {userStuff.map(tech => (
          <UserItems key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userStuff: state.userStuff
  };
};

export default connect(mapStateToProps, {})(UserTechList);