import { GrayButton } from "../button";
import { ShearIcon } from "../svg";
import { Texts } from "../texts";
import { WorkImg, WorkImgGOL } from "../work";

export const Work = () => {
  return (
    <main className="dark:bg-[#030712] bg-white" id="work">
      <div className="lg:container lg:w-full lg:m-auto ">
        <div className="lg:px-0 lg:py-24 py-16 px-4">
          <div className="flex flex-col gap-12 lg:px-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <GrayButton text={"Work"} />
              <div>
                <p className="text-center text-xl dark:text-[#F9FAFB] text-gray-600 font-light not-italic ">
                  Here is a quick summary of my most recent experiences:
                </p>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 rounded-xl shadow-xl ">
              <WorkImg image={"./metaVlog.png"} />
              <div className="flex flex-col gap-6 flex-[1_0_0] lg:p-12 p-8  lg:rounded-r-xl lg:rounded-l-none rounded-b-xl dark:bg-[#1F2937] bg-white ">
                <p className="text-xl  dark:text-[#F9FAFB] text-gray-900 not-italic font-medium">
                  Meta blog
                </p>
                <div>
                  <Texts
                    text={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
                    }
                  />
                </div>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  <GrayButton text={"React"} />
                  <GrayButton text={"Next.js"} />
                  <GrayButton text={"Tailwindcss"} />
                  <GrayButton text={"Figma"} />
                  <GrayButton text={"GitHub"} />
                </div>
                <a href="https://blog-website-tau-peach.vercel.app/">
                  <ShearIcon />
                </a>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse rounded-xl shadow-xl ">
              <div className="flex flex-col gap-6 flex-[1_0_0] lg:p-12 p-8 lg:rounded-l-xl lg:rounded-r-none rounded-b-xl  dark:bg-[#1F2937] bg-white  ">
                <p className="text-xl  dark:text-[#F9FAFB] text-gray-900 not-italic font-medium">
                  Expense tracker
                </p>
                <div>
                  <Texts
                    text={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
                    }
                  />
                </div>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  <GrayButton text={"React"} />
                  <GrayButton text={"Next.js"} />
                  <GrayButton text={"Express.js"} />
                  <GrayButton text={"PostgreSQL"} />
                  <GrayButton text={"REST API"} />
                  <GrayButton text={"Vercel"} />
                  <GrayButton text={"Render"} />
                  <GrayButton text={"Tailwindcss"} />
                  <GrayButton text={"DaisyUI"} />
                  <GrayButton text={"GitHub"} />
                </div>
                <a href="https://expense-tracker-ten-roan-59.vercel.app/">
                  <ShearIcon />
                </a>
              </div>
              <WorkImgGOL image={"./expense-tracker.png"} />
            </div>
            <div className="lg:grid lg:grid-cols-2 rounded-xl shadow-xl ">
              <WorkImg image={"./foodDelivery.png"} />
              <div className="flex flex-col gap-6 flex-[1_0_0] lg:p-12 p-8 lg:rounded-r-xl lg:rounded-l-none rounded-b-xl dark:bg-[#1F2937] bg-white  ">
                <p className="text-xl  dark:text-[#F9FAFB] text-gray-900 not-italic font-medium">
                  Food Delivery
                </p>

                <div>
                  <Texts
                    text={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
                    }
                  />
                </div>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  <GrayButton text={"Typescript"} />
                  <GrayButton text={"Next.js"} />
                  <GrayButton text={"Vercel"} />
                  <GrayButton text={"Render"} />
                  <GrayButton text={"Express.js"} />
                  <GrayButton text={"Node.js"} />
                  <GrayButton text={"Mongodb"} />
                  <GrayButton text={"MUI"} />
                  <GrayButton text={"Google map API"} />
                  <GrayButton text={"Cloudinary"} />
                </div>
                <a href="https://food-delivery-iota-sepia.vercel.app/">
                  <ShearIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
