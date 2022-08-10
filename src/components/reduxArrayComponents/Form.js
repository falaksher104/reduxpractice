import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddKeywords,
  selectKeyword,
} from "../../features/arrayshow/arraySlice";
const arr = [];
// console.log({ arr });
const Form = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const submitKeyword = () => {
    console.log({ keyword, arr });
    arr.push(keyword);

    console.log({ after: arr });
    dispatch(AddKeywords(keyword));
  };

  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Enter keywords
        </h2>
      </div>
      <div class="mb-3">
        <label for="" class="form-label"></label>
        <input
          type="text"
          placeholder="Enter keywords "
          style={{
            width: "200px",
            height: "20px",
            margin: "10px",
            padding: "10px 20px",
            textAlign: "center",
          }}
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button
          style={{
            width: "100px",
            height: "40px",
            margin: "10px",
            padding: "10px 20px",
            textAlign: "center",
          }}
          onClick={submitKeyword}
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default Form;
