import React from "react";
import styles from "./AboutMe.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";

import { CgDisplayFlex } from "react-icons/cg";
import { SiBootstrap } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import { SiPython } from "react-icons/si";
import {SiTailwindcss} from "react-icons/si";
import { HiTerminal } from "react-icons/hi";

const AboutMe = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.aboutMeInfo}>
        <h1>About Me</h1>
        <div className={styles.headlineBorder}></div>
        <p>
          Here you will find more about me, what I do, what my passion is and my
          skills in programming
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.info}>
          <h3>Get to know me!</h3>
          <p>
            My name is <b>Jan Mackovic</b> and I come from <b>Croatia</b>,
            I am a <b>Front-end Web Developer</b> building websites since 2017.
          </p>
          <p>
            Some of my <b>hobbies</b> are: running, learning French and creating
            some interesting <b>Projects</b> to expand my developers knowledge.
          </p>
          <p>
            I am a quick learner with a strong desire to expand my{" "}
            <b>knowledge and skills.</b> I am adaptable and able to pick up new
            concepts and technologies with ease. I am always eager to take on
            new challenges and <b>continuously improve myself.</b>{" "}
          </p>
          <p>I am currently learning <b>backend frameworks</b>(Node.js,GraphQl) to become a Full stack Web Developer.</p>
        </div>
        <div className={styles.skills}>
          <h3>My Skills:</h3>
          <div className={styles.skillsWrap}>
            <div className={styles.box}>
              <h6>HTML</h6> <AiFillHtml5 />{" "}
            </div>
            <div className={styles.box}>
              <h6>CSS</h6> <SiCss3 />{" "}
            </div>
            <div className={styles.box}>
              <h6>Javascript</h6> <SiJavascript />{" "}
            </div>
            <div className={styles.box}>
              <h6>React</h6> <SiReact />{" "}
            </div>
            <div className={styles.box}>
              <h6>Flexbox</h6> <CgDisplayFlex />
            </div>
            <div className={styles.box}>
              <h6>Bootstrap</h6> <SiBootstrap />{" "}
            </div>
            <div className={styles.box}>
              <h6>Material UI</h6> <SiMaterialui />
            </div>
            <div className={styles.box}>
              <h6>Git</h6> <AiFillGitlab />
            </div>
            <div className={styles.box}>
              <h6>Python</h6> <SiPython />
            </div>
            <div className={styles.box}>
              <h6>Terminal</h6> <HiTerminal />
              </div>
              <div className={styles.box}>
              <h6>React Native</h6> <SiReact />
            </div>
            <div className={styles.box}>
              <h6>Tailwind</h6> <SiTailwindcss />
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
