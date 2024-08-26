export const Texts = (allText) => {
  const { text } = allText;
  return (
    <p className="text-base not-italic font-light dark:text-[#D1D5DB] text-gray-600">
      {text}
    </p>
  );
};
