export const TestImg = () => {
  return (
    <main className="lg:flex lg:justify-center lg:items-center lg:w-[280px] lg:h-[320px] hidden dark:bg-[#030712] bg-white ">
      <div className="w-[285px] h-[325px] dark:bg-[#374151] bg-gray-200 rounded-lg relative">
        <div className="flex justify-center items-center  w-[285px] h-[325px] dark:bg-[#030712] bg-white rounded-lg absolute bottom-10 right-10">
          <img
            className="w-[270px] h-[310px] flex-shrink-0 rounded-lg"
            src="./MyPhoto.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};
