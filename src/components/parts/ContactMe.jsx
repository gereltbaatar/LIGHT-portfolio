import { GrayButton } from "../button";
import { GitIcon } from "../skills_icon";
import {
  CallIcon,
  CopeIcon,
  EmailIcon,
  FacebookIcon,
  FigmaIcon,
  GithubIcon,
  InstagramIcon,
  XIcon,
} from "../svg";
import { Texts } from "../texts";

export const ContactMe = () => {
  return (
    <main className="dark:bg-[#030712] bg-white w-full " id="contact">
      <div className="lg:container w-full lg:m-auto ">
        <div className="lg:px-0 lg:py-24 py-16 px-4">
          <div className="flex flex-col lg:gap-12 gap-6 items-center ">
            <div className="flex flex-col items-center justify-center gap-4 lg:px-8 ">
              <GrayButton text={"Get in touch"} />
              <div>
                <p className="lg:max-w-[576px] text-center text-xl dark:text-[#D1D5DB] text-gray-600 font-light not-italic ">
                  What’s next? Feel free to reach out to me if you're looking
                  for a developer, have a query, or simply want to connect.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center  ">
              <div className="flex items-center gap-5">
                <EmailIcon />
                <p className="dark:text-[#F9FAFB] text-gray-900 lg:text-4xl text-lg not-italic font-medium tracking-[-0.72px]">
                  mglgerelt@gmail.com
                </p>
                <CopeIcon />
              </div>
              <div className="flex items-center gap-5">
                <CallIcon />
                <p className="dark:text-[#F9FAFB] text-gray-900 lg:text-4xl text-lg not-italic font-medium tracking-[-0.72px]">
                  +976 85910226
                </p>
                <CopeIcon />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Texts text={"You may also find me on these platforms!"} />
              <div className="flex gap-1">
                <GithubIcon />
                <XIcon />
                <FigmaIcon />
                <FacebookIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
