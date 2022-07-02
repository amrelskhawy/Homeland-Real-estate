import React from "react";

import { housesData } from "../data";
import { useParams, Link } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

export const PropertyDetails = () => {
    const { id } = useParams();

    const house = housesData.find((house) => {
        return house.id === parseInt(id);
    });

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });

    console.log(house);
    return (
        <section>
            <div className="container mx-auto min-h-[800px] mb-14">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">{house.name}</h2>
                        <h3 className="text-lg mb-4">{house.address}</h3>
                    </div>
                    <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm ">
                        <div className="bg-green-500 px-3 rounded-full text-white">
                            {house.type}
                        </div>
                        <div className="bg-violet-500 px-3 rounded-full text-white">
                            {house.country}
                        </div>
                    </div>
                    <div className="text-3xl font-semibold text-violet-600 mb-4 lg:mb-0">
                        {formatter.format(house.price)}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="max-w-[768px]">
                        <div className="mb-8">
                            <img src={house.imageLg} alt="" />
                        </div>

                        <div className="flex gap-x-6 text-violet-700 text-2xl">
                            <div className="flex gap-x-2 items-center">
                                <BiBed />
                                <div>{house.bedrooms}</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <BiBath />
                                <div>{house.bathrooms}</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <BiArea />
                                <div>{house.surface}</div>
                            </div>
                        </div>

                        <div>{house.description}</div>
                    </div>

                    <div className="flex-1 h-fit bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 ">
                        <div className="flex items-center gap-x-4 mb-8">
                            <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                                <img src={house.agent.image} alt="" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">
                                    {house.agent.name}
                                </div>
                                <Link to="" className="text-violet-700 text-sm">
                                    View Listing
                                </Link>
                            </div>
                        </div>

                        <form action="">
                            <input
                                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 mb-2 text-sm"
                                type="text"
                                placeholder="Name*"
                            />
                            <input
                                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 mb-2 text-sm"
                                type="text"
                                placeholder="Email*"
                            />
                            <input
                                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 mb-2 text-sm"
                                type="text"
                                placeholder="Phone*"
                            />
                            <textarea className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full h-36 p-4 mb-2 text-sm text-gray-400" placeholder="Message*"
                            defaultValue="Hello I am interested in [modern appartment]"
                            ></textarea>
                            <div className="flex gap-2">
                                <button
                                className="bg-violet-700 hover:bg-violet-800 text-white p-4 text-sm w-full rounded-lg transition"
                                >Send Message</button>
                                <button
                                className="text-violet-700 border border-violet-700 hover:border-violet-500 hover:text-violet-500 p-4 text-sm w-full rounded-lg transition"
                                >Call</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
