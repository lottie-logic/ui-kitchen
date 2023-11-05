import React, { useState } from "react";
import HorizontalScroll from "../../HorizontalScroll/Fancy/HorizontalScrollFancy";
import KittenCards from "@/app/DemoContent/KittenCards";
import VerticalScroll from "../../VerticalScroll/VerticalScroll";

interface MenuProps {
  setActiveContent: React.Dispatch<React.SetStateAction<string>>;
}

interface ButtonConfig {
  label: string;
  content: string;
}

const buttonConfigs: ButtonConfig[] = [
  { label: "Horizontal scroller", content: "Content 1" },
  { label: "Vertical scroller", content: "Content 2" },
  { label: "Button 3", content: "Content 3" },
  { label: "Button 3", content: "Content 4" },
  { label: "Button 3", content: "Content 5" },
  { label: "Button 3", content: "Content 6" },
  { label: "Button 3", content: "Content 7" },
  { label: "Button 3", content: "Content 8" },
  { label: "Button 3", content: "Content 9" },
  { label: "Button 10", content: "Content 10" },
  // Add more button configurations here
];

const Menu: React.FC<MenuProps> = ({ setActiveContent }) => {
  return (
    <div className="h-full w-full overflow-clip ">
      {/* <div className="p-10">
        <div className="flex mb-4  flex-col gap-5"> */}
      <VerticalScroll>
        {buttonConfigs.map((buttonConfig, index) => (
          <button
            key={index}
            className="px-4 py-2 my-4 bg-blue-500 text-white"
            onClick={() => setActiveContent(buttonConfig.content)}
          >
            {buttonConfig.label}
          </button>
        ))}
      </VerticalScroll>
      {/* </div>
      </div> */}
    </div>
  );
};

export default Menu;
