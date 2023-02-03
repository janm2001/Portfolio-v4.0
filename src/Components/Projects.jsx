import React from "react";
import { Link } from "@mui/material";
import styles from "./Projects.module.css";
import { AiFillGithub } from "react-icons/ai";
import {BsFillBootstrapFill} from "react-icons/bs"
import {CgDisplayFlex} from "react-icons/cg"
import {SiJavascript} from 'react-icons/si'
import { SiMaterialui } from "react-icons/si";
import { SiReact } from "react-icons/si";


const Projects = () => {
  return (
    <div id="project" className={styles.container}>
      <div className={styles.projectsInfo}>
        <h1>Projects</h1>
        <div className={styles.headlineBorder}></div>
        <p>
          Here you will find some of my best projects, you can explore each one
          and see what technologies did I used.
        </p>
      </div>
      <div className={styles.projects}>
        <div className={styles.formula}>
          <div className={styles.backgroundImg}></div>

          <div className={styles.formulaInfo}>
            <h3 className={styles.title}>Formula 1</h3>
            <div className={styles.paragraph}>
            <div className={styles.tech}>
              <div className={styles.btn}>Bootstrap <BsFillBootstrapFill className={styles.btnIcon}/> </div>
              <div className={styles.btn}>Flexbox <CgDisplayFlex className={styles.btnIcon}/></div>
              <div className={styles.btn}>Javascript <SiJavascript className={styles.btnIcon}/></div>
            </div>
            <p >
              Stunning resposnive website for all F1 lovers who would like to
              read about the history of the sport, recent news, current
              standings, read about their favorite driver and much more...
            </p>
            </div>
           
            
            <div className={styles.links}>
              <Link href=" https://janm2001.github.io/f1-hr/" className={styles.btnLink}>Visit Website</Link>{" "}
              <Link href="https://github.com/janm2001/f1-hr" className={styles.btnLink}>
                Code <AiFillGithub className={styles.btnLinkIcon}/>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.nba}>
          

          <div className={styles.formulaInfo}>
            <h3 className={styles.title}>NBA</h3>

           <div className={styles.paragraph}>
           <div className={styles.tech}>
              <div className={styles.btn}>Bootstrap <BsFillBootstrapFill className={styles.btnIcon}/> </div>
              <div className={styles.btn}>Flexbox <CgDisplayFlex className={styles.btnIcon}/></div>
              <div className={styles.btn}>Javascript <SiJavascript className={styles.btnIcon}/></div>
            </div>
           <p >
              Responsive NBA website where you can buy the newest NBA gear, you can check out the biggest NBA news, and read about your favorite team and about the legends of this sport.
            </p>
            
           </div>
            
            <div className={styles.links}>
              <Link href=" https://janm2001.github.io/nba2.0/" className={styles.btnLink}>Visit Website</Link>{" "}
              <Link href="https://github.com/janm2001/nba2.0" className={styles.btnLink}>
                Code <AiFillGithub className={styles.btnLinkIcon}/>
              </Link>
            </div>
          </div>

          <div className={styles.backgroundImg}></div>
        </div>


        <div className={styles.wow}>
          <div className={styles.backgroundImg}></div>

          <div className={styles.formulaInfo}>
            <h3 className={styles.title}>World Of Warcraft</h3>
            <div className={styles.paragraph}>
            <div className={styles.tech}>
              <div className={styles.btn}>React <SiReact className={styles.btnIcon}/> </div>
              <div className={styles.btn}>Flexbox <CgDisplayFlex className={styles.btnIcon}/></div>
              <div className={styles.btn}>Material Ui <SiMaterialui className={styles.btnIcon}/></div>
            </div>
            <p >
              Website using react and material ui to display content for all World of Warcraft lovers where you can find information about expansions, classes and news...
            </p>
            </div>
           
            
            <div className={styles.links}>
              <Link href="#" className={styles.btnLink}>Visit Website</Link>{" "}
              <Link href="#" className={styles.btnLink}>
                Code <AiFillGithub className={styles.btnLinkIcon}/>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.ttt}>
          

          <div className={styles.formulaInfo}>
            <h3 className={styles.title}>TicTacToe</h3>

           <div className={styles.paragraph}>
           <div className={styles.tech}>
              
              <div className={styles.btn}>Javascript <SiJavascript className={styles.btnIcon}/></div>
            </div>
           <p >
              Simple classic Tic Tac Toe game that everyone loves to play.
            </p>
            
           </div>
            
            <div className={styles.links}>
              <Link href="https://janm2001.github.io/TicTacToe/" className={styles.btnLink}>Visit Website</Link>{" "}
              <Link href="https://github.com/janm2001/TicTacToe" className={styles.btnLink}>
                Code <AiFillGithub className={styles.btnLinkIcon}/>
              </Link>
            </div>
          </div>

          <div className={styles.backgroundImg}></div>
        </div>

        


      </div>
      


      

      
    </div>
  );
};

export default Projects;
