import React, { useRef } from 'react'
import $ from "jquery"
import { Link } from 'react-router-dom'

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
    <div className="flex flex-col items-center font-mono h-screen mt-20">
      <h1 className="text-4xl font-bold mb-10 text-cyan-600 font-mono">Add user</h1>
      <form className="border rounded border-1 w-2/5">
        <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="text" ref={nameRef} placeholder='name'/>
        <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="text" ref={ageRef} placeholder='age'/>
        <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="text" ref={emailRef} placeholder='email' />      

        {/* I tried use res.redirect, history and window.location to redirect to users page,
        it's not working at all! Then I used react router Link to replace the button, it works perfect!! */}
        <Link className='border rounded border-1 border-cyan-600 p-3 mt-14 mx-auto outline-none text-cyan-600 hover:bg-cyan-600 hover:text-white text-center block w-4/5' to="/users" onClick={addUser}>ADD</Link>
        <Link className='border rounded border-1 border-orange-700 p-3 mt-4 mb-14 mx-auto outline-none text-orange-700 hover:bg-orange-700 hover:text-white text-center block w-4/5' to="/users">CANCEL</Link>
      </form>
    </div>
  )
}

export default Add