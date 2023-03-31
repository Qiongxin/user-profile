import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-mono">
      <h1 className="text-4xl font-bold mb-10 text-cyan-700">Welcome to the simple user management app made by Esther✨</h1>
      <Link className="border-solid border-2 rounded-full border-sky-200 no-underline p-2 text-cyan-600 hover:bg-cyan-600 hover:text-white " to="/users">Click me to get user profiles!</Link>
    </div>

    // <div className="flex flex-col items-center justify-center font-mono h-screen">
    //   <h1 className="text-4xl font-bold mb-10 text-cyan-600 font-mono">Please login to see user profiles</h1>
    //   <form className="border rounded border-1 w-2/5">
    //     <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="text" placeholder='email'/>
    //     <input className='border rounded border-1 border-cyan-600 mx-auto w-4/5 p-3 my-9 outline-none block' type="password" placeholder='password' />      

    //     <Link className="border rounded border-1 border-cyan-600 p-3 my-14 mx-auto outline-none text-cyan-600 hover:bg-cyan-600 hover:text-white text-center block w-4/5" to="/users">Log in</Link>
    //   </form>
    // </div>
  )
}

export default Welcome