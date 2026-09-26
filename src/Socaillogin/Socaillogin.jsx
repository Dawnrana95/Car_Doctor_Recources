'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Socaillogin() {

    const Session = useSession()

    const router = useRouter()

    const handalSocaillogin = async(providername) => {
        signIn(providername)
    
    }

    useEffect(() => {
        if (Session?.data?.user) {
            router.push('/')
            toast("Login Sucess Full")


        }
    }, [Session])

    return (
        <div >
            <button type='button' onClick={() => handalSocaillogin('google')} className='w-full btn'>
                <FaGoogle />
            </button>
            <button type='button' onClick={() => handalSocaillogin('github')} className='w-full btn'>
                <FaGithub />
            </button>
        </div>
    )
}
