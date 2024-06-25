"use client";

import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";
import TextCard from "../TextCard";
import texts from "@/utils/Texts";
import { useLocale } from "next-intl";

const SlideBar = () => {
  const [ref, { width }] = useMeasure();
  const locale = useLocale();
  const xTranslation = useMotionValue(0);
  const textList = texts();

  useEffect(() => {
    let finalPosition = -15000;
    if (locale == "ar") {
      finalPosition = 15000;
    }

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 1000,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);
  return (
    <div className="py-8 w-full overflow-hidden bg-primary">
      <motion.div
        className="left-0 flex gap-16 "
        ref={ref}
        style={{
          x: xTranslation,
        }}
      >
        {textList.map((text, i) => {
          return <TextCard key={i} text={text} />;
        })}
      </motion.div>
    </div>
  );
};

export default SlideBar;
