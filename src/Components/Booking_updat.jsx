"use client";
import React from "react";
import Swal from "sweetalert2";


const Booking_updat = ({ data }) => {
    const { singalBooking } = data;
    const { service_id, phone } = singalBooking;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const datas = Object.fromEntries(formData.entries());

        const res = await fetch(`https://car-doctor-recources.vercel.app/api/My_booking/${service_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datas)
        })
        const postadResponc = await res.json()

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    };


    return (
        <div className="min-h-screen bg-white px-4 py-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-6 text-center text-2xl font-semibold text-gray-700">
                    Book Service:
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Name
                            </label>

                            <input
                                defaultValue={singalBooking.name}

                                type="text"
                                name="name"
                                placeholder=""
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Date
                            </label>

                            <input
                                value={new Date().toISOString().split("T")[0]}
                                readOnly
                                type="date"
                                name="date"
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 text-gray-600 outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Email
                            </label>

                            <input
                                defaultValue={singalBooking.email}
                                type="email"
                                name="email"
                                placeholder="email"
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Due Amount */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Due amount
                            </label>

                            <input
                                defaultValue={singalBooking.amount}
                                type="text"
                                name="amount"
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Phone
                            </label>

                            <input
                                defaultValue={singalBooking.phone}

                                type="tel"
                                name="phone"
                                placeholder="Your Phone"
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Present Address */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Present Address
                            </label>

                            <input
                                defaultValue={singalBooking.address}
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 outline-none focus:border-purple-500"
                            />
                        </div>

                    </div>

                    {/* Button */}
                    <button

                        type="submit"
                        className="mt-5 h-11 w-full rounded-lg bg-gradient-to-r from-purple-700 to-violet-600 text-sm font-medium text-white transition hover:opacity-90"
                    >
                        Order Confirm
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking_updat;