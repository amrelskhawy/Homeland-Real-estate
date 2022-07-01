import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

export const House = ({ house }) => {
    const {
        name,
        image,
        type,
        country,
        address,
        bedrooms,
        bathrooms,
        surface,
        price,
    } = house;

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });


    return (
        <div className="bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
            <img
                className="mb-4 flex gap-x-2 text-sm"
                src={image}
                alt={`${name} image`}
            />
            <div>
                <div className="flex gap-2 my-4 ">
                    <div className="bg-green-500 rounded-full text-white px-3">
                        {type}
                    </div>
                    <div className="bg-violet-500 rounded-full text-white px-3">
                        {country}
                    </div>
                </div>
                <div className="text-lg font-semibold max-w-[260px]">
                    {address}
                </div>

                <div className="flex items-center gap-x-4 text-gray-600">
                    <div className="flex items-center gap-1 text-[20px]">
                        <div>
                            <BiBed />
                        </div>
                        <div>{bedrooms}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[20px]">
                        <div>
                            {" "}
                            <BiBath />
                        </div>
                        <div>{bathrooms}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[20px]">
                        <div>
                            <BiArea />
                        </div>
                        <div>{surface}</div>
                    </div>
                </div>
                <div className="font-bold mt-2 text-violet-600">{formatter.format(price)}</div>
            </div>
        </div>
    );
};
