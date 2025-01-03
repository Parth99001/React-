import React from 'react'
import { auth } from '../cnfig/Firebase';
import { signOut } from 'firebase/auth';

const Home = ({handleOut}) => {


  return (
    <div>Home

      <button onClick={handleOut}>LogOut</button>
    </div>
  )
}

export default Home