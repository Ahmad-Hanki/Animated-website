"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <div
        ref={ref}
        className="w-full h-screen bg-slate-900 grid place-items-center overflow-hidden"
      >
        <motion.div
          style={{
            y: textY,
          }}
        >
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo quis sint? Ducimus excepturi iure vel nobis fugit dolorem, doloribus necessitatibus non tempora nam unde beatae corporis aperiam? Praesentium, ipsa.</h1>
        </motion.div>
      </div>

      
      <div className="w-full h-screen bg-slate-600 grid place-items-center z-10">
        <h1>hi</h1>
      </div>
    </>
  );
};

export default Example;
