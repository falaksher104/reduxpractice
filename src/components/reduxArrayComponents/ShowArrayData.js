import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteKeywords,
  selectKeyword,
} from "../../features/arrayshow/arraySlice";

const ShowArrayData = () => {
  const array = useSelector(selectKeyword);
  console.log({ array });
  return (
    <>
      {array.map((elem, index) => {
        return (
          <div key={index}>
            <h2
              style={{
                backgroundColor: "grey",
                margin: "10px",
                padding: "10px",
              }}
            >
              {elem}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default ShowArrayData;
