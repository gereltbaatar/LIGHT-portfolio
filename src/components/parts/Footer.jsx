import { AtIcon } from "../svg";
import { Texts } from "../texts";

export const Footer = () => {
  return (
    <main className="w-full  dark:bg-[#111827] bg-gray-50">
      <div className="lg:container w-full lg:m-auto">
        <div className="lg:px-0 lg:py-5 py-6 ">
          <div className="flex justify-center items-center gap-2">
            <AtIcon />
            <Texts text={"2024 | Greetings with ❤️️ from Ulaanbaatar"} />
          </div>
        </div>
      </div>
    </main>
  );
};
