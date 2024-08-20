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
import Logo from "./Logo";
function Main() {
  const tabs = useMemo(() => {
    const tab = [
      {
        title: "Home",
        value: "Home",
        content: (
          <div className="overflow-auto relative w-full text-xl font-bold text-white rounded-2xl cover tab md:text-4xl">
            <Cover />
          </div>
        ),
      },
      {
        title: "Skills",
        value: "Skills",
        content: (
          <div className="overflow-auto relative w-full text-xl font-bold text-white rounded-2xl Skills tab md:text-4xl">
            <Skills />
          </div>
        ),
      },
      {
        title: "Projects",
        value: "Projects",
        content: (
          <div className="overflow-auto relative  w-full h-[calc(100vh-15vh)]  text-xl font-bold text-white  rounded-2xl tab md:text-4xl">
            <Projects />
          </div>
        ),
      },
      {
        title: "About",
        value: "About",
        content: (
          <div className=" overflow-auto relative h-[calc(100vh-15vh)] w-full text-xl tab font-bold text-white rounded-2xl tab md:text-4xl">
            <About />
          </div>
        ),
      },
      {
        title: "ContactMe",
        value: "ContactMe",
        content: (
          <div className="overflow-hidden relative w-full text-xl font-bold text-white rounded-2xl tab md:text-4xl">
            <ContactMe />
          </div>
        ),
      },
    ];
    return tab;
  }, []);
  const [contact, setContact] = useState(false);
  return (
    <main className="flex relative gap-5 pt-5 w-full h-screen min-h-screen">
      <Button setContact={setContact} contact={contact} />
      <Logo />
      <aside
        className={
          "bg-white  flex flex-col gap-10 items-center  md:static fixed top-[50%] -translate-y-1/2 z-50 rounded-lg w-[50px] my-auto h-fit transition-all " +
          (contact ? `left-0` : `-left-20`)
        }
      >
        <Tooltip />
      </aside>
      <div className="text-center  overflow-hidden  h-[calc(100vh-50px)]  [perspective:1000px] relative b flex flex-col w-[90%] items-start justify-start ">
        <Tabs tabs={tabs} />
      </div>
    </main>
  );
}

export default React.memo(Main);
