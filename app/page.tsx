"use client";

import Image from "next/image";
import Menu from "./Recipes/Layout/Menu/Menu";
import HorizontalScrollFancy from "./Recipes/HorizontalScroll/Fancy/HorizontalScrollFancy";
import HorizontalScrollSimple from "./Recipes/HorizontalScroll/Simple/HorizontalScrollSimple";
import KittenCards from "./DemoContent/KittenCards";
import { useState } from "react";
import VerticalScroll from "./Recipes/VerticalScroll/VerticalScroll";

export default function Home() {
  const [activeContent, setActiveContent] = useState("Content 1");

  const renderContent = () => {
    switch (activeContent) {
      case "Content 1":
        return (
          <div>
            <h2>
              <strong>Simple</strong> tailwindcss
            </h2>
            <HorizontalScrollSimple>
              <KittenCards />
            </HorizontalScrollSimple>

            <h2>
              <div className="h-8"></div>
              <strong>Fancy Faded Edges & Arrows</strong> SCSS + tailwindcss
            </h2>
            <HorizontalScrollFancy>
              <KittenCards />
            </HorizontalScrollFancy>
          </div>
        );
      case "Content 2":
        return (
          <VerticalScroll>
            <KittenCards />
          </VerticalScroll>
        );
      // case "Content 3":
      //   return <Content3 />;
      default:
        return null;
    }
  };

  return (
    <main className=" h-screen w-full  border-2">
      <div className=" h-[10%]  border-2">tailwindcss component library</div>
      <div className="flex flex-1  h-[70%] w-full">
        <div className=" w-[30%]  border-2">sideBar</div>
        <div className=" w-[70%] flex flex-row">
          <div className="w-[30%]  border-2 ">
            <Menu setActiveContent={setActiveContent} />
          </div>

          <div className="p-5 border overflow-clip w-[70%]">
            {/* <div>show code / show ui button choice changes this window</div> */}
            {renderContent()}
          </div>
        </div>
      </div>
      <div className=" border-2 h-[20%]">footer</div>
    </main>
  );
}
