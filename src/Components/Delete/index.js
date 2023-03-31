import React from 'react'
import $ from "jquery"

function Delete({id, name}) {

  //get id from main component and pass it to mongodb for deleting
  //Task 5 and 7. Use jQuery to make AJAX requests DELETE /users/:id: Delete a user profile by ID.
  const deleteUser = () => {
    const answer = window.confirm(`Are you sure to delete ${name}'s profile?`)
    if (answer) {
      $.ajax({
        url: `http://localhost:3001/users/${id}`,
        type: 'DELETE',
        success: data => {
          console.log("Successfully send delete request")
        },
        error: err => {
          console.log(err)
        }
      })
      //I don't understand why it's working here, not working on add component
      window.location = "http://localhost:3000/users"
    }
  }

  return (
    <div><button className="text-orange-700" type="submit" onClick={deleteUser}>Delete</button></div>
  )
}

export default Delete