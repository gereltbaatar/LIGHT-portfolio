import { GrayButton } from "../button";
import { TestImg2_1 } from "../TestImg2_1";
import { TestImg2_2 } from "../TestImg2_2";
import { LiText, Texts } from "../texts";

export const About = () => {
  return (
    <main className="dark:bg-[#111827] bg-gray-50 " id="about">
      <div className="lg:container w-full lg:m-auto lg:px-20 lg:py-24 py-16 px-4">
        <div className="flex flex-col gap-6 gap-12 items-center lg:justify-center lg:px-8 ">
          <GrayButton text={"About Me"} />
          <div className="lg:flex lg:gap-12 lg:w-full">
            <div className="flex lg:flex-col justify-center lg:flex-[1_0_0] lg:items-start  lg:self-stretch lg:min-w-[620px]">
              <TestImg2_1 />
              <TestImg2_2 />
            </div>
            <div className="flex flex-col gap-6 items-start self-stretch">
              <div className="text-3xl dark:text-[#F9FAFB] text-gray-900 not-italic font-semibold  tracking-[-0.6px]">
                Curious about me? Here you have it:
              </div>
              <div className="">
                <div className="flex flex-col gap-4">
                  <Texts
                    text={
                      "I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code"
                    }
                  />
                  <Texts
                    text={
                      "Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more."
                    }
                  />
                  <Texts
                    text={
                      "With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub."
                    }
                  />
                  <Texts text={"Finally, some quick bits about me."} />
                  <div className="flex gap-4">
                    <div>
                      {" "}
                      <LiText text={"B.E. in Computer Engineering"} />
                      <LiText text={"Full time freelancer"} />
                    </div>
                    <div>
                      <LiText text={"Avid learner"} />
                    </div>
                  </div>
                  <Texts
                    text={
                      "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
