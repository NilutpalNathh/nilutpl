import React, {useEffect, useState}  from "react";

function Form() {
    const data= {name:"", email:"", password:""};
    const [inputData, setInputData]= useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
       console.log("Login")
    },[flag])
    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
     function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory")
        }
        else{
            setFlag(true)
        }
     }
     return (
        <>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You've Login Success</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
    <div className='header'>
        <h1>User Login</h1>
    </div>
    <div>
         <input type='text' placeholder="Enter your Name" name="name" value={inputData.name} onChange={handleData}></input>

    </div>
    <div>
         <input type='email' placeholder="Enter your Email" name="email" value={inputData.email} onChange={handleData}></input>

    </div>
    <div>
         <input type='password' placeholder="Enter your Password"name="password"value={inputData.password} onChange={handleData}></input>

    </div>
         <button type='Submit'>Submit</button>


   </form>
   </>
     )
}

export default Form