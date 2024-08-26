export const WorkImg = ({ image }) => {
  return (
    <div className=" dark:bg-[#374151] bg-gray-50 lg:rounded-l-xl rounded-t-xl lg:rounded-r-none lg:p-12 p-8 object-cover flex justify-center items-center">
      <img className="w-max rounded-xl h-auto" src={`${image}`} alt="" />
    </div>
  );
};
