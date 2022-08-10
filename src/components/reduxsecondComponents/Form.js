import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { secondSubmit } from "../../features/second/secondSlice";
const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          dispatch(
            secondSubmit({ title: e.target.value, desc: desc, price: price })
          );
        }}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
          dispatch(
            secondSubmit({ title: title, desc: e.target.value, price: price })
          );
        }}
      />
      {price}
      <input
        type="text"
        placeholder="Enter price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);

          dispatch(
            secondSubmit({ title: title, desc: desc, price: e.target.value })
          );
        }}
      />
    </div>
  );
};

export default Form;
