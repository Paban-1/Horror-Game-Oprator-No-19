// Import Game Pages Components & export
import MenuPage from "../GamePages/MenuPage";

export { MenuPage };

// Import Game Components & export
import Introducted from "../GameCompo/Introducted";
import IntroductedStory from "../GameCompo/IntroductedStory";

export { Introducted, IntroductedStory };

// Import Game Play components & export
import GamePlay from "../GamePlay/GamePlay";

export { GamePlay };

import img from "../../public/MenuImg.jpg";
export const MenuImg = img;

// IntroDucted Dilogs
export const introduc = [
  { id: 1, dilog: "i try my best to save her but ..." },
  { id: 2, dilog: "but.." },
  { id: 3, dilog: "*hummm" },
  { id: 3, dilog: "it's my fault" },
];

// First Script
export const StoryData = [
  { id: 1, data: "i try my best to save her but ..." },
  {
    id: 2,
    data: "2 It's been severel months i work as a 911 Oprator",
  },
  { id: 3, data: "3 I almost help every Calls," },
  { id: 4, data: "4 But that one call is ruind my life" },
  { id: 5, data: "5 This is my story" },
];

// IntroductedStory Dilogs
export const IntroductedStoryDilogs = [
  {
    id: 1,
    dilog:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, incidunt dolorum suscipit beatae quidem fugiat corrupti blanditiis. Impedit suscipit natus qui, fuga ullam rerum sequi non vitae quis delectus architecto.",
  },
  {
    id: 2,
    dilog:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, incidunt dolorum suscipit beatae.",
  },
];

// First day calls
export const FirstDay = [
  // First Caller Dilogs
  { id: 1, dilog: "Hey! i'm nethan" },
  {
    id: 2,
    dilog: "i just end my 12 hours shift and umm i accualy can't sleep",
  },
  {
    id: 3,
    dilog:
      "my naibor, his dog is barking all the night,i conformt him but he don't get any action",
  },
  { id: 4, dilog: "This is anoing, you know ?" },
  { id: 5, dilog: "Could you plese help me ?" },

  // Oprator Dilogs
  { id: 6, opraDilog: "Sir i can understand your problem", route:"" },
  { id: 7, opraDilog: "Sorry Sir i can't help" },
  { id: 8, opraDilog: "Kill the dog" },
  { id: 9, opraDilog: "Get sleeping pill" },
];

export const queryss = [];

//ANIMATION
export const HeadingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const typingVariants = {
  hidden: { width: "0ch", opacity: 1 },
  visible: (i) => ({
    width: "100%",
    transition: {
      delay: i * 0.5,
      duration: 2,
      ease: "linear",
    },
  }),
};

export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};
export const ChildVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.5,
    },
  }),
};
export const ChardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const ChardVariantsTwo = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};
