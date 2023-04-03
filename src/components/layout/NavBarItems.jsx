import { useState } from "react";

import { useWindowDimensions } from "../../hooks/useWindowsDimentions";
import { ReactComponent as Speedometer } from "../../assets/speedometer.svg";
import { ReactComponent as Notes } from "../../assets/note-2.svg";
import { ReactComponent as Global } from "../../assets/global.svg";
import { ReactComponent as Card } from "../../assets/card.svg";
import { ReactComponent as Settings } from "../../assets/setting-5.svg";

const navBarOptions = [
  { title: "Models", path: "/dashboard", src: <Speedometer />, count: 20 },
  { title: "Datasets", path: "", src: <Notes />, count: 20 },
  { title: "Connected Websites", path: "", src: <Global /> },
  { title: "Manage Subscription", path: "", src: <Card /> },
  { title: "Settings", path: "", src: <Settings /> },
];

const NavBarItems = ({ open = false, setOpen }) => {
  const width = useWindowDimensions();
  const [select, setSelect] = useState(0);
  return (
    <div className="overflow-auto mt-4">
      {navBarOptions.map((Menu, index) => (
        <div
          key={index}
          className={`flex mb-2 cursor-pointer items-center gap-x-4 p-2 ${
            open ? "pl-5" : "pl-3"
          } text-sm hover:bg-primary 
               ${
                 index === select
                   ? "custom-gredient border-l-[3px] border-l-[#0096C7] font-semibold text-primary"
                   : "text-white"
               } `}
          onClick={() => {
            if (width <= 768 && open) {
              setOpen(() => false);
            }
            setSelect(index);
          }}
        >
          {Menu.src}
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            {Menu.title}
          </span>
          {Menu.count && (
            <span className="text-white bg-[#023E8A] py-1 px-2 rounded-[24px] ml-auto mr-0 text-xs">
              {Menu.count}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBarItems;
