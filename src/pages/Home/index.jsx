import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to='/login'>Sign in</Link>
      <Link to='/register'>Sign Up</Link>
    </div>
  )
}
