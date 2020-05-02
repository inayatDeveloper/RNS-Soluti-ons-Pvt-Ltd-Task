import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "../actions/signIn";
const DashBorad = (props) => {
  console.log("user......333", props.User);
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">UserInfo.</h5>
        <p class="card-text">email:{props.User.User.email}</p>
      </div>
    </div>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashBorad)
);
