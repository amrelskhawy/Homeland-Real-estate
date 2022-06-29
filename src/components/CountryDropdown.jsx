import React, { useContext, useState, useEffect } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

export const CountryDropdown = () => {
    const {country, setCountry , countries} = useContext(HouseContext);

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
                <RiMapPinLine className="text-2xl mr-[18px] text-violet-700" />
                <div className="flex gap-4 w-full items-center">
                    <div>
                        <div className="text-[16px] font-medium leading-tight">
                            {country}
                        </div>
                        <div className="text-[13px]">select your place</div>
                    </div>

                    {isOpen ? (
                        <RiArrowUpSLine className="text-2xl text-violet-700 ml-auto  text-[30px]" />
                    ) : (
                        <RiArrowDownSLine className="text-2xl text-violet-700 ml-auto  text-[30px]" />
                    )}
                </div>
            </Menu.Button>
            <Menu.Items className="px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg">
                {countries.map((country, index) => {
                    return (
                        <Menu.Item
                            as="li"
                            onClick={() => setCountry(country)}
                            key={index}
                            className="cursor-pointer hover:text-violet-700 transition"
                        >
                            {country}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
