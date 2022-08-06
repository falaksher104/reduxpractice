import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  loginUser,
  deleteLogin,
  selectUser,
} from "../features/Profile/userSlice";

const Home = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const nameHandle = (e) => {
    setName(e.target.value);
    dispatch(
      loginUser({
        name: e.target.value,
      })
    );
  };

  const user = useSelector(selectUser);
  console.log(user.name);
  return (
    <div>
      {/* {username} */}
      <input type="text" value={name} onChange={nameHandle} />
      <button
        onClick={(e) => {
          dispatch(deleteLogin());
        }}
      >
        delete user{" "}
      </button>
      <h2>{user.name}</h2>
    </div>
  );
};

export default Home;
