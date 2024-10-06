"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface XPInterface {
  xpCount?: string;
  totalXp?: string;
  progress: number;
}

const XP: React.FC<XPInterface> = ({ xpCount, totalXp, progress }) => {
  const [progressState, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progress), 2000);
    return () => clearTimeout(timer);
  }, [progress]);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <h4 className="text-white font-bold">
            XP: <span className="text-[#F08E3C]">{xpCount}</span>
          </h4>{" "}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h4 className="text-white font-bold">{totalXp}</h4>
        </motion.div>
      </div>
      <div className="border-t-4 my-2 rounded-md h-6 px-2 py-1 border-[#291911] bg-[#35241C]">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progressState}%` }}
          transition={{ duration: 1 }}
        >
          <Progress value={progressState} />
        </motion.div>
      </div>
    </div>
  );
};

export default XP;
