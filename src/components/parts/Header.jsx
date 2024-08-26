import { Change, DownloadButton, HeaderButton } from "../button";
import { MenuIcon } from "../svg";

export const Header = ({ handleClickMenu }) => {
  return (
    <main className="dark:bg-[#030712] bg-white w-full fixed z-[1]">
      <div className="flex justify-center static z-[1]">
        <div className="container m-auto  dark:bg-[#030712] bg-white">
          <div className="lg:px-[80px] lg:py-4 p-4  ">
            <div className="lg:px-8 flex justify-between">
              <a
                href="#hero"
                className="flex items-center font-title text-3xl text-gray-900 dark:text-[#F9FAFB] not-italic font-normal tracking-[-0.6px]"
              >
                LIGHT
              </a>
              <nav className="lg:flex lg:justify-center hidden lg:items-center gap-6 ">
                <HeaderButton textType={"#about"} text={"About"} />
                <HeaderButton textType={"#work"} text={"Work"} />
                <HeaderButton textType={"#skills"} text={"Testimonials"} />
                <HeaderButton textType={"#contact"} text={"Contact"} />
                <div className="h-6 w-[1px] dark:bg-[#1F2937] bg-gray-100"></div>
                <div className="flex justify-center items-center gap-4  ">
                  <Change />
                  <DownloadButton text={"Download CV"} />
                </div>
              </nav>
              <div
                className="lg:hidden flex justify-between p-[6px]"
                onClick={handleClickMenu}
              >
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
