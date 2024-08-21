import React, { useState } from "react";

const FormData = () => {
    const [form, setForm] = useState({
        firsName: '',
        lastName: '',
        checkbox: '',

    })
    const [data, setData] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setData(form)
    }
    console.log(data,"Data::::",form)
  return <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '8px'}}>
    <form style={{display: 'flex', flexDirection: 'column'}}>
        <label>First Name</label>
        <input id = 'firstName' onChange={ e => setForm({...form, [e.target.id]: e.target.value})} />
        <label>Last Name</label>
        <input id = 'lastName' onChange={ e => setForm({...form, [e.target.id]: e.target.value})}/>
       <label style={{display: 'flex'}}>
       <p>Are you okay with terms consition</p>
       <input id = "isAgree" onChange={ e => setForm({...form, [e.target.id]: e.target.value })} type="checkbox" />
       </label>
       <button onClick={handleSubmit}>Submit</button>
    </form>
  </div>;
};

export default FormData;
