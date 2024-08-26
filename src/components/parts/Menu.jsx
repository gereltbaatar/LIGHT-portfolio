import { useState } from "react";
import { Change, DownloadButton, HeaderButton } from "../button";
import { CancelIcon } from "../svg/CancelIcon";
import { Texts } from "../texts";

export const Menu = ({ posRight, handleClickMenu, zIndex, menuHidden }) => {
  return (
    <main className="">
      <div
        className={`w-full h-full drop-shadow-2xl filter  fixed
          ${posRight ? "right-[0]" : "right-[-100%]"} 
          ${zIndex ? "z-[3] " : "z-[0]"}
          ${menuHidden ? "static" : "lg:fixed"} `}
      >
        <div className="w-full h-full background  filter flex justify-end">
          <div className="w-[80%] h-full dark:bg-[#030712]  bg-white">
            <div className="p-4 flex justify-between ">
              <p className="flex items-center font-title text-3xl text-gray-900 dark:text-[#F9FAFB] not-italic font-normal tracking-[-0.6px]">
                LIGHT
              </p>
              <button onClick={handleClickMenu}>
                <CancelIcon />
              </button>
            </div>
            <div className="h-[2px] w-full dark:bg-[#1F2937] bg-gray-100"></div>
            <div className="p-4 flex flex-col items-start gap-4">
              <button onClick={handleClickMenu}>
                <HeaderButton textType={"#about"} text={"About"} />
              </button>

              <button onClick={handleClickMenu}>
                <HeaderButton textType={"#work"} text={"Work"} />
              </button>
              <button onClick={handleClickMenu}>
                <HeaderButton textType={"#skills"} text={"Testimonials"} />
              </button>
              <button onClick={handleClickMenu}>
                <HeaderButton textType={"#contact"} text={"Contact"} />
              </button>
            </div>
            <div className="h-[2px] w-full dark:bg-[#1F2937]  bg-gray-100"></div>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Texts text={"Switch Theme"} />
                <Change />
              </div>
              <DownloadButton text={"Download CV"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
