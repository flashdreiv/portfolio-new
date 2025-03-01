"use client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useState, useRef } from "react";
import Project from "./components/project";
import Mask from "./components/mask";
import Frame from "./components/frame";
import Home from "./components/home";
import About from "./components/about";

export default function Index() {
  const navList = ["Home", "About", "Projects"];
  const [content, setContent] = useState("Projects");
  const containerRef = useRef();

  const renderContent = () => {
    switch (content) {
      case "About":
        return <About />;
      case "Projects":
        return <Project />;
      default:
        return <Home />;
    }
  };

  const handleSelectNav = (navItem) => {
    setTimeout(() => {
      setContent(navItem);
    }, 150);
  };

  return (
    <div>
      <Mask />
      <Frame />

      <div className="h-screen p-[40px] flex flex-col gap-[50px]">
        <header>
          <div>
            <p className="font-bold  md:text-3xl xs:text-lg">
              Dreivan Orprecio
            </p>
            <p className="text-xs md:text-base font-light">
              Full Stack Developer
            </p>
          </div>
        </header>
        <div className="flex w-full">
          <nav>
            <ul className="flex flex-col gap-[5px]">
              {navList.map((navItem) => (
                <li key={navItem}>
                  <button onClick={() => handleSelectNav(navItem)}>
                    <p className="flex items-center gap-[5px] xs:text-xs hover:opacity-50 md:text-sm font-bold lg:text-xs">
                      {navItem === content ? <span>●</span> : navItem}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <main className={`${content === "Projects" ? "z-[-1]" : ""} ml-auto`}>
            {content === "Projects" ? (
              <LocomotiveScrollProvider
                options={{
                  smooth: true,
                  lerp: 0.1,
                  scrollFromAnywhere: true,
                }}
                watch={[content]}
                containerRef={containerRef}
              >
                <div ref={containerRef} data-scroll-container>
                  {renderContent()}
                </div>
              </LocomotiveScrollProvider>
            ) : (
              renderContent()
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
