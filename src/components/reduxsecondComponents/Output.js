import React from "react";
import { useSelector } from "react-redux";
import {
  selectsecond,
  selectsecondBtn,
} from "../../features/second/secondSlice";
const Output = () => {
  const second = useSelector(selectsecond);
  const secondBtn = useSelector(selectsecondBtn);
  console.log({ secondBtn });
  return (
    <div>
      {secondBtn && second !== null ? (
        <>
          <h2>{second.title} </h2>
          <h2>{second.desc} </h2>
          <h2>{second.price} </h2>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Output;
