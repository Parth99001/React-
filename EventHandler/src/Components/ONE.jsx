import React from 'react'

const ONE = () => {
  return (
    <>
    <form action="" className='bg-black text-center text-white '>
        <label htmlFor="">Full Name: </label>
        <input type="text" placeholder='Enter Your Full name' required/><br />
        <label htmlFor="">Email: </label>
        <input type="email" placeholder='Enter Your Email' required /><br />
        <button className='bg-primary btn' onClick={alert("Form Submited")} >Submit</button>
    </form>
    </>
  )
}

export default ONE