import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Software Developer</h1>
        <p className={styles.description}>
          Hi, I'm Ankit Kumar, a passionate web developer skilled in JavaScript, React.js, and Tailwind CSS.
          I specialize in building dynamic, responsive, and efficient web applications using modern frameworks like Express.js 
          and Mongoose. With a keen eye for design and functionality, I create seamless user experiences for the web.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/selfpic.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
