import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectsecond, secondBtnSubmit,secondDelete } from "../../features/second/secondSlice";

const SubmitButton = () => {
    const second = useSelector(selectsecond);
    const dispatch = useDispatch()
    const GetAndSubmitData = () =>{
        console.log({ second })
    dispatch(secondBtnSubmit(true))
    }
  return (
    <div>
        <button onClick={GetAndSubmitData}>Submit </button>
        <button onClick={()=>{
          dispatch(secondBtnSubmit(false))
        dispatch(secondDelete())
        }}>Clear </button>
      
    </div>
  )
}

export default SubmitButton
