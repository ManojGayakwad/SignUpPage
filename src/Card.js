import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";

import Button from "@mui/material/Button";

function Card(props) {
  return (
    <div className="card">
      <h2>Sign Up</h2>
      <Form>
        <div className="Lname">
          <label className="label">First name</label>
          <input className="input" type="text" placeholder="First name" />
        </div>
        <div className="Lname">
          <label className="label">Last name</label>
          <input className="input" type="text" placeholder="Last name" />
        </div>
        <div class="email">
          <label className="label">Email address</label>
          <input className="input" type="text" placeholder="Enter email" />
        </div>
        <div className="password">
          <label className="label">Password</label>
          <input className="input" type="text" placeholder="Enter password" />
        </div>
      </Form>
      <div className="button">
        <Button variant="contained">Sign Up</Button>
      </div>
      <p className="para">
        Already registered <a href=" #">sign in?</a>
      </p>
    </div>
  );
}

export default Card;
