import img from "../../public/MenuImg.jpg";
export const MenuImg = img;

import ken from "../../public/ken.mp3";
import oprator from "../../public/911oprator.mp3";
import everycall from "../../public/everycalls.mp3";
import onecall from "../../public/onecall.mp3";
import story from "../../public/story.mp3";

//First Script
export const StoryData = [
  { id: 1, data: "I'm ken,", audio: ken },
  {
    id: 2,
    data: "It's been severel months i work as a 911 Oprator",
    audio: oprator,
  },
  { id: 3, data: "I almost help every Calls,", audio: everycall },
  { id: 4, data: "But that one call is ruind my life", audio: onecall },
  { id: 5, data: "This is my story", audio: story },
];

export const queryss = [
  {id:1,
    play: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumendanostrum praesentium, ex nobis corrupti animi molestias placeat, atnecessitatibus ab ut nulla! Iure consequatur vitae aliquid alias, officia aliquam quasi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reprehenderit quidem, est enim veritatis incidunt, eveniet ipsum impedit sint dolorum possimus officiis dolore earum in deserunt natus animi similique. Ex!Beatae suscipit officia distinctio ipsum odit eveniet ab laudantium! Similique porro earum voluptas laboriosam eveniet deleniti eligendi est voluptatem! Maiores eveniet quos quod perferendis. Totam nostrum fugit sapiente aliquid ut.Harum, modi! Earum, ab blanditiis consectetur voluptatem ipsa soluta cumque! Enim cum delectus doloremque dignissimos vitae quisquam quibusdam repellendus beatae eligendi cumque libero officia adipisci, unde fuga ea quod? Dicta!Excepturi, impedit sed saepe, quos est repellendus alias et accusamus ullam cumque recusandae, tempore rerum eveniet. Saepe impedit facere omnis, ex asperiores repellendus alias, repellat, praesentium nesciunt doloremque optio? Dignissimos.Consequatur nulla ducimus odio ipsam aut! Repudiandae esse fugit possimus temporibus expedita culpa illum incidunt error impedit voluptatem, sed tempore sapiente. Unde repellendus laboriosam cumque cupiditate voluptatibus fugiat ut doloribus?Rerum ab maxime in maiores ullam modi eius dolor vitae, nisi quis delectus nemo quidem veritatis voluptas error labore accusamus eum porro possimus reiciendis quod nihil eveniet, id inventore? Vel.Beatae quasi quae cupiditate ratione. Ipsa dicta veniam possimus? Iste, delectus deleniti culpa reprehenderit quidem nam, maiores quibusdam necessitatibus vitae earum molestias eum natus molestiae fugiat suscipit nisi, similique tempora?A autem, neque consectetur praesentium culpa cum in, molestiae dicta quas atque dolores placeat. Error, repellendus cum odio, unde ducimus enim provident quas, aut explicabo culpa consequuntur voluptatum cupiditate sit?Inventore ipsam quae at iusto iste nam voluptatibus eos molestias, nulla soluta facere sit ipsum ut, eveniet libero tempora. Doloribus itaque veritatis fugit iusto obcaecati nesciunt quam aspernatur sequi? Aut?Modi labore, magni aliquam porro itaque excepturi non, atque quo cupiditate repellendus odit ex, omnis eveniet ullam quaerat temporibus quia. Obcaecati facilis quos quo accusantium, atque quam. Fugit, voluptates. Distinctio.",
  },
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
