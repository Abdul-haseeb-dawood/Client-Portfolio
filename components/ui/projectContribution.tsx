"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../ProjectContribution";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration:40,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 "
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, heading }, i) => (
                <div className="p-10 rounded-3xl border-2 border-[#C2FFFF] shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <h1 className="font-bold mb-4 text-[#C7EBEB] tracking-tight leading-5">{heading}</h1>
                  <div className="text-white text-sm">{text}</div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};