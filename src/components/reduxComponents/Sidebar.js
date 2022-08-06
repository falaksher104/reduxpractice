import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  firstDelete,
  selectFirst,
} from "../../features/first/firstSlice";
const Sidebar = () => {
    const first = useSelector(selectFirst);
    console.log({ first })
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"lightgrey",
        padding:"10px 10px",
        width:"200px",
        height:"70vh",
        flexDirection:"column"

    }}>
          <div>{first.email}</div>
          <div>{first.age}</div>
          <div>{first.name}</div>
      
    </div>
  )
}

export default Sidebar
