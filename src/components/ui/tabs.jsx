"use client";

import React, { memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = useCallback(
    (idx) => {
      const newTabs = [...propTabs];
      const selectedTab = newTabs.splice(idx, 1);
      newTabs.unshift(selectedTab[0]);
      setTabs(newTabs);
      setActive(newTabs[0]);
    },
    [propTabs]
  );

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex relative flex-row flex-wrap justify-start items-center p-2 w-full max-w-full card [perspective:1000px] sm:overflow-visible no-visible-scrollbar",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-lg", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 rounded-lg dark:bg-zinc-800",
                  activeTabClassName
                )}
              />
            )}

            <span
              className={
                "block relative  dark:text-white " +
                (active.value === tab.value ? `text-black` : `text-white`)
              }
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("md:mt-5", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = memo(({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("overflow-auto absolute top-0 left-0 w-full h-full", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
});
