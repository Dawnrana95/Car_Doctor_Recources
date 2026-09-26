"use client";

import { mongodbinsartData } from "@/app/Checkout/[id]/mongodbinsartData";
import { useSession } from "next-auth/react";
import React from "react";

const CheckoutForm = ({ singlaData }) => {
    const { service_id, _id } = singlaData;
    
    const Session = useSession()
    const user = Session?.data?.user;


    const handleSubmit =async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const totalData = { ...data,serviceId: service_id, service_id: _id }
        console.log(totalData)

        const rsc = await mongodbinsartData(totalData);
    };


    return (
        <div className="min-h-screen bg-white px-4 py-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-6 text-center text-2xl font-semibold text-gray-700">
                    Book Service: {singlaData?.title}
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Name
                            </label>

                            <input
                                value={user?.name || ""}
                                readOnly
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
                                value={user?.email || ""}
                                readOnly
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
                                type="text"
                                name="amount"
                                value={singlaData?.price || ""}
                                readOnly
                                className="h-11 w-full rounded-lg border border-gray-200 px-4 outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-600">
                                Phone
                            </label>

                            <input
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

export default CheckoutForm;