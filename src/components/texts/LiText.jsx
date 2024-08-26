export const LiText = ({ text }) => {
  return (
    <div className="flex">
      <div>
        <li className="dark:text-white"></li>
      </div>
      <p className="list-disc text-base not-italic font-light dark:text-[#D1D5DB] text-gray-600">
        {text}
      </p>
    </div>
  );
};
