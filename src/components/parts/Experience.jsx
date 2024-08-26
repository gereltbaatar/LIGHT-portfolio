import { GrayButton } from "../button";
import { ExperienceText } from "../texts";

export const Experience = () => {
  return (
    <main className="w-full dark:bg-[#111827] bg-gray-50">
      <div className="container w-full m-auto">
        <div className="md:px-20 md:py-24 py-16 px-4 ">
          <div className="flex flex-col justify-between gap-12 lg:px-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <GrayButton text={"Experience"} />
              <div>
                <p className="text-center text-xl  dark:text-[#D1D5DB] text-gray-600 font-light not-italic ">
                  Here is a quick summary of my most recent experiences:
                </p>
              </div>
            </div>
            <ExperienceText />
          </div>
        </div>
      </div>
    </main>
  );
};
