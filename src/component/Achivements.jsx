"use client";
import React from "react";


// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );

const achievementsList = [
  {
    metric: "Projects",
    value: "15",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "0",
  },
  {
    metric: "Awards",
    value: "0",
  },
  {
    metric: "Years",
    value: "1",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-secondary-400 to-primary-800">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {achievement.value}
                {/* <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                /> */}
                {achievement.postfix}
              </h2>
              <p className="text-[#03080c] font-bold text-3xl">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
