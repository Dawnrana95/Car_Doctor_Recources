'use client'
import Image from 'next/image'
import React from 'react'
import img1 from '../../public/Group2.svg'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

function Nabvar() {

    const Session = useSession();
    const user = Session?.data?.user

    return (
        <div className=" lg:grid lg:grid-cols-3 lg:items-center lg:justify-between px-4 py-1 bg-mauve-100">

            <div className="flex justify-center lg:justify-start">
                <div className="flex justify-center lg:justify-start">
                    <Image
                        src={img1}
                        alt="Car Doctor Logo"
                        priority
                        width={85}
                        height={40}
                        style={{ width: '85px', height: '40px' }}
                    />
                </div>
                <div className="flex justify-center lg:justify-start avatar avatar-online">
                    {user?.image && (
                        <Image
                            src={user.image}
                            alt="User"
                            width={40}
                            height={40}
                            priority
                        />
                    )}
                </div>
            </div>

            <div className="flex gap-1 justify-center">
                <Link className="bg-gray-200 px-3 py-1 text-center rounded-box text-sm whitespace-nowrap" href="/">Home</Link>
                <Link className="bg-gray-200 px-3 py-1 text-center rounded-box text-sm whitespace-nowrap" href="/about">About</Link>
                <Link className="bg-gray-200 px-3 py-1 text-center rounded-box text-sm whitespace-nowrap" href="/My_booking">Service</Link>
                <Link className="bg-gray-200 px-3 py-1 text-center rounded-box text-sm whitespace-nowrap" href="/blog">Blog</Link>
                <Link className="bg-gray-200 px-3 py-1 text-center rounded-box text-sm whitespace-nowrap" href="/contact">Contact</Link>
            </div>

            <div className="flex justify-center items-center lg:justify-end">
                <div className='flex p-4'>

                    {
                        user ?
                            <h1 className='p-5 mx-0.5 btn' onClick={() => signOut()} ><button >Logout</button></h1>
                            :
                            <>
                                <Link href={'/login'}><h1 className='p-5 mx-0.5 btn'>Login</h1></Link>
                                <Link href={'/register'}><h1 className='p-5 mx-0.5 btn'>Register</h1></Link>
                            </>
                    }


                </div>
                <button className="btn btn-sm text-red-500 border-red-500">
                    Appointment
                </button>
            </div>

        </div>
    )
}

export default Nabvar