export const GrayButton = (about) => {
  const { text } = about;
  return (
    <button className="flex justify-center items-center px-5 py-1  rounded-xl bg-gray-200 text-sm dark:bg-[#374151] dark:text-[#D1D5DB] text-gray-600 not-italic font-medium ">
      {text}
    </button>
  );
};
