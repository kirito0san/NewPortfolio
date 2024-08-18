import React, { useMemo, useState } from "react";
import { Tabs } from "./ui/tabs";
import Cover from "./Cover";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import "animate.css";
import ContactMe from "./ContactMe";
import Tooltip from "./ui/Tooltip";
import Button from "./ui/BtnShare";
function Main() {
  const tabs = useMemo(() => {
    const tab = [
      {
        title: "Home",
        value: "Home",
        content: (
          <div className="overflow-auto  relative w-full  h-[calc(100vh-15vh)]  text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl md:text-4xl">
            <Cover />
          </div>
        ),
      },
      {
        title: "Skills",
        value: "Skills",
        content: (
          <div className="overflow-auto  h-[calc(100vh-15vh)]  relative w-full text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl tab md:text-4xl">
            <Skills />
          </div>
        ),
      },
      {
        title: "Projects",
        value: "Projects",
        content: (
          <div className="overflow-auto px-10 relative  w-full h-[calc(100vh-15vh)]  text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl tab md:text-4xl">
            <Projects />
          </div>
        ),
      },
      {
        title: "About",
        value: "About",
        content: (
          <div className=" overflow-auto relative h-[calc(100vh-15vh)] w-full text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl tab md:text-4xl">
            <About />
          </div>
        ),
      },
      {
        title: "ContactMe",
        value: "ContactMe",
        content: (
          <div className="overflow-hidden px-2 relative  w-full h-[calc(100vh-15vh)] text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl tab md:text-4xl">
            <ContactMe />
          </div>
        ),
      },
    ];
    return tab;
  }, []);
  const [contact, setContact] = useState(false);
  return (
    <main className="flex relative gap-5 w-full h-screen min-h-screen">
      <Button setContact={setContact} contact={contact} />
      <aside
        className={
          "bg-white flex flex-col gap-10 items-center  md:static fixed top-[50%] -translate-y-1/2 z-50 rounded-lg w-[50px] my-auto h-fit transition-all " +
          (contact ? `left-0` : `-left-20`)
        }
      >
        <Tooltip />
      </aside>
      <div className="text-center overflow-hidden  h-[calc(100vh-50px)]  [perspective:1000px] relative b flex flex-col w-[90%] items-start justify-start ">
        <Tabs tabs={tabs} />
      </div>
    </main>
  );
}

export default React.memo(Main);
