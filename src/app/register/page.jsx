'use client'
import React from 'react'
import mongodbPostData from './mongodbPostData';
import Socaillogin from '@/Socaillogin/Socaillogin';

const Register = () => {

    const handalOnsubmit = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const pass = e.target.pass.value;
        const email = e.target.email.value;

        const currentUser = { name, pass, email };

        const result = await mongodbPostData(currentUser)
 
    }

    return (
        <form className='justify-self-center mx-auto shadow-2xl' onSubmit={handalOnsubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Page details</legend>

                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Your Name" />

                <label className="label">Pass..</label>
                <input name='pass' type="password" className="input" placeholder="Your Password" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Your Email" />

                <button className='btn'><input type="submit" value="Submit" /></button>
                <Socaillogin></Socaillogin>
            </fieldset>
        </form>
    )
}

export default Register