"use client";

import Image from "next/image";
import Menu from "./Recipes/Layout/Menu/Menu";
import HorizontalScroll from "./Recipes/HorizontalScroll/HorizontalScroll";
import KittenCards from "./DemoContent/KittenCards";
import { useState } from "react";

export default function Home() {
  const [activeContent, setActiveContent] = useState("Content 1");

  const renderContent = () => {
    switch (activeContent) {
      case "Content 1":
        return (
          <HorizontalScroll>
            <KittenCards />
          </HorizontalScroll>
        );
      // case "Content 2":
      //   return <Content2 />;
      // case "Content 3":
      //   return <Content3 />;
      default:
        return null;
    }
  };

  return (
    <main className=" h-screen w-full  border-2">
      <div className=" h-[10%]  border-2">upper header</div>
      <div className="flex flex-1  h-[70%] w-full">
        <div className=" w-[30%]  border-2">sideBar</div>
        <div className=" w-[70%] flex flex-row">
          <div className="w-[30%]  border-2">
            <Menu setActiveContent={setActiveContent} />
          </div>
          <div className="p-5 border overflow-clip w-[70%]">
            {renderContent()}
          </div>
        </div>
      </div>
      <div className=" border-2 h-[20%]">footer</div>
    </main>
  );
}
