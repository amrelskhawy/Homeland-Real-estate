import React, { useContext, useState, useEffect } from "react";

import { RiWallet3Line , RiArrowUpSLine ,RiArrowDownSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

export const PriceRangeDropdown = () => {

    const {price, setPrice} = useContext(HouseContext);

    const prices = [
        {
            value : "Price Range (any)"
        },
        {
            value : "100000 - 130000"
        },
        {
            value : "130000 - 160000"
        },
        {
            value : "160000 - 190000"
        },
        {
            value : "10000 - 30000"
        },
        {
            value : "30000 - 40000"
        },
    ]
    const [isOpen, setIsOpen] = useState(false);



    return (
        <Menu
            as="div"
            className="w-full lg:max-w-[296px] cursor-pointer relative justify-between"
        >
            <Menu.Button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left  "
            >
                <RiWallet3Line className="text-2xl mr-[18px] text-violet-700" />
                <div className="flex gap-4 w-full items-center">
                    <div>
                        <div className="text-[16px] font-medium leading-tight">
                            {price}
                        </div>
                        <div className="text-[13px]">Price Range </div>
                    </div>
                    {isOpen ? (
                        <RiArrowUpSLine className="text-2xl text-violet-700 ml-auto  text-[30px]" />
                    ) : (
                        <RiArrowDownSLine className="text-2xl text-violet-700 ml-auto  text-[30px]" />
                    )}
                </div>
            </Menu.Button>

            <Menu.Items className="px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg">
                {prices.map((price, index) => {
                    return (
                        <Menu.Item
                            as="li"
                            onClick={() => setPrice(price.value)}
                            key={index}
                            className="cursor-pointer hover:text-violet-700 transition"
                        >
                            {price.value}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
