import { useState } from "react";
import { SunIcon } from "../svg";
import { MoonIcon } from "../svg/MoonIcon";

export const Change = () => {
  const [icon, seticon] = useState(true);
  const [dark, setDark] = useState(true);

  const iconl = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    seticon(!icon);
  };

  return (
    <div className="flex items-center p-[6px] dark:bg-[#030712] bg-white">
      {icon ? (
        <button onClick={iconl}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={iconl}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
};
