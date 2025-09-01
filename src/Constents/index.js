import img from "../../public/MenuImg.jpg";
export const MenuImg = img;

//First Script
export  const StoryData = [
  { id: 1, data: "1 I'm ken," },
  {
    id: 2,
    data: "2 It's been severel months i work as a 911 Oprator",
  },
  { id: 3, data: "3 I almost help every Calls," },
  { id: 4, data: "4 But that one call is ruind my life" },
  { id: 5, data: "5 This is my story" },
];

export const queryss = [
  
];

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
