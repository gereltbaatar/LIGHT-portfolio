import { GithubIcon, GreenTseg, LoctionIcon, XIcon, FigmaIcon } from "../svg";
import { TestImg } from "../TestImg";
import { Texts } from "../texts";
import { TestImg1 } from "../TestImg1";

export const Hero = () => {
  return (
    <main className=" dark:bg-[#030712] bg-white" id="hero">
      <div className="lg:container lg:m-auto  ">
        <div className="lg:px-20 lg:py-24 pb-16 pt-[132px] px-4">
          <div className="lg:flex lg:flex-row-reverse lg:items-center justify-between gap-12 lg:px-8">
            <div className="flex justify-center lg:min-w-96 lg:flex-[1,0,0] lg:justify-end lg:items-end ">
              <TestImg1 />
              <TestImg />
            </div>
            <div className="max-w-[600px] flex flex-col gap-12 ">
              <div className="flex  flex-col gap-2 ">
                <p className="lg:text-6xl text-4xl leading-[72px] not-italic tracking-[-1.2px] lg:font-bold  font-semibold dark:text-[#F9FAFB] text-gray-900">
                  Hi, I’m Light-T-Hito 👋
                </p>
                <p className=" text-base not-italic font-light dark:text-[#D1D5DB] text-gray-600">
                  I specialize in full stack development, particularly with
                  React.js and Node.js. My main goal is to create exceptional
                  digital experiences that are fast, visually appealing, and
                  accessible to everyone. With over 7 years of experience in web
                  development, I continue to find joy in crafting innovative
                  solutions and designs.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <LoctionIcon />
                  <Texts text={"Ulaanbaatar, Mongolia"} />
                </div>
                <div className="flex gap-2 ">
                  <GreenTseg />
                  <Texts text={"Available for new projects"} />
                </div>
              </div>
              <div className="">
                <div className="flex gap-1">
                  <GithubIcon />
                  <XIcon />
                  <FigmaIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
