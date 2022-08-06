import React, { useState } from "react";
import {  useDispatch } from "react-redux";

import {
  firstLogin,
  
} from "../../features/first/firstSlice";
const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleFirstForm = () => {
    dispatch(
      firstLogin({
        name: name,
        email: email,
        age: age,
      })
    );
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",

        alignItems: "center",
        flexDirection: "column",
        padding: "10px 10px",
        margin: "auto",
      }}
    >
      <h2>First Slice </h2>
      <input
        type="text"
        placeholder="Enter name "
        style={{
          margin: "20px 0px ",
          paddingLeft: "10px",
          width: "300px",
          height: "40px",
        }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Enter email "
        style={{
          margin: "20px 0px ",
          paddingLeft: "10px",
          width: "300px",
          height: "40px",
        }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter age"
        style={{
          margin: "20px 0px ",
          paddingLeft: "10px",
          width: "300px",
          height: "40px",
        }}
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button
        style={{
          margin: "20px 0px ",
          paddingLeft: "10px",
          width: "300px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={handleFirstForm}
      >
        Submit{" "}
      </button>
    </div>
  );
};

export default Main;
