import React from 'react'
import $ from "jquery"

function Update({id, nameUpdate}) {

  const updateUser = () => {
    $.ajax({
      url: `http://localhost:3001/users/${id}`,
      type: 'PUT',
      data: {

      },
      success: data => {
        console.log("Successfully send put request");
      },
      error: err => 
        console.log(err)
    });

    console.log(nameUpdate())
  }

  return (
    <div><button className="text-cyan-600" type="submit" onClick={updateUser}>Edit</button></div>
  )
}

export default Update