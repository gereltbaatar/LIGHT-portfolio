import { GrayButton } from "../button";
import {
  CypressIcon,
  ExpressJsIcon,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  MongoDBIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  ReactIcon,
  SassScssIcon,
  SocketIoIcon,
  StorybookIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "../skills_icon";
import { DoneSkilIcon } from "../skills_icon/DoneSkilIcon";

export const Skills = () => {
  const skillIcon = [
    {
      id: 0,
      iconC: <JavascriptIcon />,
      title: "JavaScript",
    },
    {
      id: 1,
      iconC: <TypescriptIcon />,
      title: "Typescript",
    },
    {
      id: 2,
      iconC: <ReactIcon />,
      title: "React",
    },
    {
      id: 3,
      iconC: <NextJsIcon />,
      title: "Nextj.s",
    },
    {
      id: 4,
      iconC: <NodeJsIcon />,
      title: "Node.js",
    },
    {
      id: 5,
      iconC: <ExpressJsIcon />,
      title: "Express.js",
    },
    {
      id: 6,
      iconC: <NestJsIcon />,
      title: "Nest.js",
    },
    {
      id: 7,
      iconC: <SocketIoIcon />,
      title: "Socket.io",
    },
    {
      id: 8,
      iconC: <PostgreSQLIcon />,
      title: "PostgreSQL",
    },
    {
      id: 9,
      iconC: <MongoDBIcon />,
      title: "MongoDB",
    },
    {
      id: 10,
      iconC: <SassScssIcon />,
      title: "Sass/Scss",
    },
    {
      id: 11,
      iconC: <TailwindcssIcon />,
      title: "Tailwindcss",
    },
    {
      id: 12,
      iconC: <FigmaIcon />,
      title: "Figma",
    },
    {
      id: 13,
      iconC: <CypressIcon />,
      title: "Cypress",
    },
    {
      id: 14,
      iconC: <StorybookIcon />,
      title: "Storybook",
    },
    {
      id: 15,
      iconC: <GitIcon />,
      title: "Git",
    },
  ];

  return (
    <main className="w-full dark:bg-[#030712] bg-white " id="skills">
      <div className="md:container md:w-full md:m-auto ">
        <div className="md:px-20 md:py-24 py-16 px-4">
          <div className="flex flex-col  md:gap-12 gap-4 ">
            <div className="flex flex-col items-center md:justify-center gap-4 md:px-8 ">
              <GrayButton text={"Skills"} />
              <div>
                <p className=" text-center text-xl dark:text-[#D1D5DB] text-gray-600 font-light not-italic ">
                  The skills, tools and technologies I am really good at:
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="grid md:gap-y-12 gap-y-4 justify-items-center md:grid-cols-8 md:grid-rows-2 grid-rows-6 grid-cols-3">
                {skillIcon.map((content) => {
                  return (
                    <DoneSkilIcon
                      icon={<div>{content.iconC}</div>}
                      text={content.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};