import { useState } from "react";
import { SunIcon, MoonIcon } from "../svg";

export const ChangeIcon = () => {
  const [icon, setIcon] = useState(false);

  const taggkeIcon = () => {
    setIcon(!icon);
  };

  return (
    <div className="">
      {icon ? (
        <button className="w-8 h-8" onClick={taggkeIcon}>
          <SunIcon />{" "}
        </button>
      ) : (
        <button className="bg-black h-8 w-8" onClick={taggkeIcon}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
};
