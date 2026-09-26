'use client'
import React from 'react'
import { MdDelete } from "react-icons/md";



const Delet = ({id,refetch}) => {
    

    const handalOnclick = async ( id ) => {
        const res = await fetch(`http://localhost:3000/api/apies/${id}`,{
            method: "DELETE"
        })
        const data = await res.json();
        refetch()
    }

    return (
        <div>
            <button onClick={() => handalOnclick(id)} className="bg-orange-500 flex items-center text-white text-sm font-medium px-4 py-1.5 rounded-md ">
                <MdDelete /> Delet
            </button>
        </div>
    )
}

export default Delet