import React, { useState } from 'react'
import $ from "jquery"
import { Link, useLocation } from 'react-router-dom';

//Task 4. Create a React component to update existing user profiles.
function Update() {
  //pass props from main to here using react router link
  const { state } = useLocation()
  const { user } = state

  const [name, setName] = useState(user.name)
  const [age, setAge] = useState(user.age)
  const [email, setEmail] = useState(user.email)

  //send updated data to mongodb
  //Task 5 and 7. Use jQuery to make AJAX requests PUT /users/:id: Update a user profile by ID.
  const updateUser = () => {
    $.ajax({
      url: `http://localhost:3001/users/${user._id}`,
      type: 'PUT',
      data: {
        name,
        age,
        email
      },
      success: data => {
        console.log("Successfully send put request")
      },
      error: err => {
        console.log(err)
      }
    })


  }

  //get new values
  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateAge = (e) => {
    setAge(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="flex flex-col items-center font-mono h-screen mt-20">
      <h1 className="text-4xl font-bold mb-10 text-cyan-600 font-mono">Edit user</h1>
      <form className="border rounded border-1 w-2/5">
        <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="text" placeholder='name' value={name} onChange={(e) => updateName(e)}/>
        <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="text" placeholder='age' value={age} onChange={(e) => updateAge(e)}/>
        <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="text" placeholder='email' value={email} onChange={(e) => updateEmail(e)}/>
        <Link className='border rounded border-1 border-cyan-600 p-3 mt-14 mx-auto outline-none text-cyan-600 hover:bg-cyan-600 hover:text-white text-center block w-4/5' to="/users" onClick={updateUser}>UPDATE</Link>
        <Link className='border rounded border-1 border-orange-700 p-3 mt-4 mb-14 mx-auto outline-none text-orange-700 hover:bg-orange-700 hover:text-white text-center block w-4/5' to="/users">CANCEL</Link>
      </form>
    </div>
   
  )
}

export default Update