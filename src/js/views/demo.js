import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="registerContainer">
      <div className="register">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">
            Register
          </label>
          <input
            className="input"
            type="text"
            name="txt"
            placeholder="Username"
            required=""
          ></input>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          ></input>
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          ></input>
          <button className="registerButton">Register</button>
        </form>
      </div>
    </div>
  );
};
