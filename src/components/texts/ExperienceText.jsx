export const ExperienceText = () => {
  const experiencText = [
    {
      id: 0,
      title: "Sr. Frontend Developer",
      lists: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Nov 2021 - Present",
    },
    {
      id: 1,
      title: "Team Lead",
      lists: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Jul 2017 - Oct 2021",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      lists: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Dec 2015 - May 2017",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-12">
      {experiencText.map((experienc) => {
        return (
          <div className="lg:flex max-w-[1200px] flex-row justify-between gap-12 p-8 rounded-xl dark:bg-[#1F2937] bg-white shadow-xl">
            <div className="h-full">
              <img
                className=" min-w-[206px]"
                src="./Column.png"
                alt=""
                width={206}
                height={28}
              />
            </div>
            <div className="flex gap-4 mt-4 lg:mt-0 flex-col-reverse ">
              <div className="flex flex-col gap-4 xl:w-[auto] max-w-[410px]">
                <div className="text-xl  dark:text-[#F9FAFB] text-gray-900 not-italic font-medium">
                  {experienc.title}
                </div>
                <div className="flex flex-wrap">
                  <div className="flex flex-col">
                    <ul className="list-disc list-inside">
                      {experienc.lists.map((list) => {
                        return (
                          <div className="flex ">
                            <li className="dark:text-[#D1D5DB]"></li>
                            <p className="text-base not-italic font-light dark:text-[#D1D5DB] text-gray-600">
                              {" "}
                              {list}
                            </p>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="h-full  md:hidden  ">
                <p className="text-base not-italic font-light  dark:text-[#D1D5DB] text-gray-700">
                  {experienc.date}
                </p>
              </div>
            </div>
            <div className="h-full  md:flex hidden">
              <p className="text-base not-italic font-light  dark:text-[#D1D5DB] text-gray-700">
                {experienc.date}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
