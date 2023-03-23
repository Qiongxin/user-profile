import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-mono">
      <h1 className="text-4xl font-bold mb-10 text-cyan-700">Welcome to the simple user management app made by Esther✨</h1>
      <Link className="border-solid border-2 rounded-full border-sky-200 no-underline p-2 text-cyan-600 hover:bg-cyan-600 hover:text-white " to="/users">Click me to get user profiles!</Link>
    </div>
  )
}

export default Welcome