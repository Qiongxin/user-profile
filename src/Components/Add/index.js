import React, { useRef } from 'react'
import $ from "jquery"

function Add() {

  //create name, age and email refs to store data
  const nameRef = useRef(null)
  const ageRef = useRef(null)
  const emailRef = useRef(null)

  //get data from user input and pass it to mongodb
  const addUser = async () => {
    $.ajax({
      url: 'http://localhost:3001/users',
      type: 'POST',
      data: { 
        name: nameRef.current.value,
        age: ageRef.current.value,
        email: emailRef.current.value
      },
      success: data => {
        console.log("Successfully send post request");
      },
      error: err => 
        console.log(err)
    });

  }

  return (
    <div>
      <form> 
        <input className='border rounded border-1 border-cyan-600 p-2 mx-3 outline-none' type="text" ref={nameRef} placeholder='name'/>
        <input className='border rounded border-1 border-cyan-600 p-2 mx-3 outline-none' type="text" ref={ageRef} placeholder='age'/>
        <input className='border rounded border-1 border-cyan-600 p-2 mx-3 outline-none' type="text" ref={emailRef} placeholder='email' />
        <button className='border rounded border-1 border-cyan-600 p-2 mx-3 outline-none text-cyan-600 hover:bg-cyan-600 hover:text-white' type="submit" onClick={addUser}>ADD</button>
      </form>
    </div>
  )
}

export default Add