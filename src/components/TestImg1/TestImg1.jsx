export const TestImg1 = () => {
  return (
    <main className="  justify-center lg:min-w-96 lg:flex-[1,0,0] lg:justify-end lg:items-center">
      <div className=" lg:hidden flex lg:justify-center lg:items-center lg:w-[320px] lg:h-[360px] dark:bg-[#030712] bg-white">
        <div className="w-[280px] h-[280px] dark:bg-[#374151] bg-gray-200 rounded-lg relative">
          <div className="flex justify-center items-center  w-[240px] h-[280px] dark:bg-[#030712] bg-white rounded-lg absolute bottom-5 right-5">
            <img
              className="w-[230px] h-[270px] flex-shrink-0 rounded-lg"
              src="./MyPhoto.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};
