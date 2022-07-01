import React, { useContext } from "react";

import { CountryDropdown } from "./CountryDropdown";
import { PriceRangeDropdown } from "./PriceRangeDropdown";
import { PropertyDropdown } from "./PropertyDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

export const Search = () => {
    const { houses } = useContext(HouseContext);
    const { handleClick } = useContext(HouseContext);
    return (
        <div
            className="px-[30px]
        py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-x-3  lg:items-center pl-10 justify-between relative lg:-top-4 lg:shadow-lg bg-white lg:bg-transparent lg:backdrop-blur  rounded-lg"
        >
            <CountryDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />
            <button
                onClick={handleClick}
                className="bg-violet-700 hover:bg-violet-800 text-white transition h-16 w-full lg:max-w-[162px] rounded-lg flex items-center justify-center text-lg w-full "
            >
                <RiSearch2Line />
            </button>
        </div>
    );
};
