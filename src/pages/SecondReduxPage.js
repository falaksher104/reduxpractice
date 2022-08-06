import React from 'react'
import Form from '../components/reduxsecondComponents/Form'
import Output from '../components/reduxsecondComponents/Output'
import SubmitButton from '../components/reduxsecondComponents/SubmitButton'

const SecondReduxPage = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignContent:"center",
        padding:"10px",
        margin:"0px  10px"
    }}>
      <Form/>
      <SubmitButton/>
      <Output/>
    </div>
  )
}

export default SecondReduxPage
