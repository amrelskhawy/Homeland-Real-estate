import React from 'react'

import { housesData } from "../data";
import { useParams , Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from "react-icons/bi";

export const PropertyDetails = () => {
    const {id} = useParams()
    
    const house = housesData.find((house) => {
        return house.id === parseInt(id)
    })

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });



    console.log(house)
    return <section>
        <div className="container mx-auto min-h-[800px].mb-14">
            <div className='flex flex-col lg:flex-row lg:items-center  lg:justify-between'>
                <div>
                    <h2 className="text-2xl font-semibold">{house.name}</h2>
                    <h3 className="text-lg mb-4">{house.address}</h3>
                </div>
                <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm '>
                    <div className="bg-green-500 px-3 rounded-full text-white" >{house.type}</div>
                    <div className="bg-violet-500 px-3 rounded-full text-white">{house.country}</div>
                </div>
                <div>{formatter.format(house.price)}</div>
            </div>
        </div>
    </section>
}
