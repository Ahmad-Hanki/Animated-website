"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  const cursorSize = 10;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOption = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOption),
    y: useSpring(mouse.y, smoothOption),
  };

  const manageMouseMove = (e: any) => {
    const { clientY, clientX } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };



  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <motion.div
      className="pointer-events-none w-[10px] h-[10px] bg-primary fixed rounded-[50%]"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}

    ></motion.div>
  );
};

export default Cursor;
