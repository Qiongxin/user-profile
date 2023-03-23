import React from 'react'
import $ from "jquery"

function Delete({id}) {

  //get id from main component and pass it to mongodb for deleting
  const deleteUser = () => {
    $.ajax({
      url: `http://localhost:3001/users/${id}`,
      type: 'DELETE',
      success: data => {
        console.log("Successfully send delete request");
      },
      error: err => 
        console.log(err)
    });
  }

  return (
    <div><button className="text-orange-700" type="submit" onClick={deleteUser}>Delete</button></div>
  )
}

export default Delete