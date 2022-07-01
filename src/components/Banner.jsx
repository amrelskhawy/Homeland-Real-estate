import React from "react";

import LandingBanner from "../assets/img/house-banner.png";
import { Search } from "./Search";

export const Banner = () => {
    return (
        <section className="h-full max-h-[640px] mb-8 xl:mb-24 ">
            <div className="flex flex-col lg:flex-row gap-[10px]">
                {/* Content Div */}
                <div
                    className="lg:ml-8 xl:ml-[135px] 
                flex flex-col items-center lg:items-start text-center lg:text-left flex-1 justify-center px-4 lg:px-0 gap-[20px]"
                >
                    <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
                        <span className="text-violet-700 font-bold">Rent</span>{" "}
                        Your Dream House With Us.
                    </h1>
                    <p className="max-w-[480px] mt-8 mb-8 lg:leading-[2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis cum nostrum ipsa provident harum non
                        voluptatum dolores, pariatur dignissimos voluptatibus
                        recusandae consequuntur, libero unde. Alias porro quos
                        tempora est? Quas.
                    </p>
                </div>
                <div className="hidden flex-1 lg:flex justify-end items-end">
                    <img className="" src={LandingBanner} alt="" />
                </div>
            </div>
            <Search />
        </section>
    );
};
