export const HeaderButton = (header) => {
  const { text, textType } = header;
  return (
    <a
      href={textType}
      className="text-base not-italic font-medium dark:text-[#D1D5DB] text-gray-600"
    >
      {text}
    </a>
  );
};
