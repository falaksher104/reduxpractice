import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  firstDelete,
  selectFirst,
} from "../../features/first/firstSlice";
console.log({selectFirst})
const Topbar = () => {
    const dispatch = useDispatch();
    const first = useSelector(selectFirst);
    console.log({ first })

  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"lightblue",
        padding:"10px 10px"
    }} >
        <div>Home </div>
          <div> {first.name} </div>
        <div><button onClick={(e)=>{
              dispatch(firstDelete({
                name:null,
                email:null,
                age:null
              }))
        }}>Logout</button> </div>
    
    </div>
  )
}

export default Topbar
