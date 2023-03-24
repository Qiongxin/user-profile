import React, { useEffect, useState } from 'react'
import Add from '../Add'
import Delete from '../Delete'
import Update from '../Update'
import $ from "jquery"
import { Link } from 'react-router-dom'

function Main() {

  const [users, setUsers] = useState([{}])
  
  //fetch users profile from mongodb and store it inside users state
  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3001/users',
      type: 'GET',
      success: data => {
        setUsers(data)
      },
      error: err => {
        console.error(err)
      }
    })
  }, [])

  const nameInput = (e) => {
    
  }

  return (
    <div className="flex flex-col items-center font-mono h-screen mt-20">
      <h1 className="text-4xl font-bold mb-10 text-cyan-600">User Profiles</h1>
      <table className="table-fixed border-solid border-1 text-center mb-8">
        <thead className="border">
          <tr className="border text-white bg-cyan-600">
            <th className="border py-3 px-8" scope="col">#id</th>
            <th className="border p-3 px-8" scope="col">Name</th>
            <th className="border p-3 px-8" scope="col">Age</th>
            <th className="border p-3 px-8" scope="col">Email Address</th>
            <th className="border p-3 px-8" scope="col"></th>
            <th className="border p-3 px-8" scope="col"></th>
          </tr>
        </thead>
        <tbody className="border">
          {/* render users's name, age, email and update and delete buttons using map function */}
          {users.map((user) =>

            // Problem 1: there is always a key error shows on console
            // Problem 2: Maybe it's because of the network instability, sometimes can't fetch data from mongodb
            (<tr className='hover:bg-slate-100' key={user._id}>
              <th className="border py-3 px-8" scope="row">{user._id}</th>
              <td className="border py-3 px-8">{user.name}</td>
              <td className="border py-3 px-8">{user.age}</td>
              <td className="border py-3 px-8">{user.email}</td>
              {/* pass id to update and delete component */}
              <td className="border py-3 px-8"><Update id={user._id} nameUpdate={nameInput}/></td>
              <td className="border py-3 px-8"><Delete id={user._id} name={user.name}/></td>
            </tr>)
            )
          }   
        </tbody>
      </table>
      <Link className='border rounded border-1 border-cyan-600 p-2 mx-3 outline-none text-cyan-600 hover:bg-cyan-600 hover:text-white' to="/users/add">Add user</Link>
    </div>
  )
}

export default Main
