'use client'
import Socaillogin from '@/Socaillogin/Socaillogin';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter();

  const handalOnsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const password = e.target.pass.value;
    const email = e.target.email.value;

    toast('form submit')

    try {

      const response = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })

      form.reset()

      if (response.ok) {
        toast.success('respons ik')
        router.push('/')
      }
      else {
        toast.error('fail to login')
      }
    }
    catch (error) {
      toast.log(error)
    }


  }
  return (

    <form onSubmit={handalOnsubmit} className='justify-self-center mx-auto shadow-2xl ' >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Login</legend>

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
