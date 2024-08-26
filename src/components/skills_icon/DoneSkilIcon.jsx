export const DoneSkilIcon = ({ icon, text }) => {
  return (
    <div className="w-[88px] h-[100px] flex flex-col items-center gap-2">
      {icon}
      <div className="text-lg not-italic font-light text-gray-600">{text}</div>
    </div>
  );
};
