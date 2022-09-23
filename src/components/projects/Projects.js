import React, { Component } from "react";
import classes from "./Projects.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import whatsgood from "../images/WhatsGood.png";
import hangman from "../images/HangMan.png"

class Project extends Component {
  render() {
    return (
      <div className={classes.box} id="project">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>WHAT HAVE I CREATED?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY PROJECTS</h2>
          <div className={classes.Project}>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>Hangman</h3>
                <img
                  src={hangman}
                  alt="Hangman"
                />
                <p>A classic game of Hangman that I built on the frontend.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>What's Good?</h3>
                <img
                  src={whatsgood}
                  alt="What's Good?"
                />
                <p>
                  A full stack web application that was developed using the MERN
                  stack. <br />
                  This site helps solve the recurring question of "what's good?"
                  at every restaurant.{" "}
                </p>
              </div>
            </ScrollAnimation>
            {/* <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.other}>
                <h3>Travel Planner</h3>
                <p>
                  A frontend React-based travel planner that aids in assisting
                  the world traveler in planning out their day at each location
                  they will be exploring.
                </p>
              </div>
            </ScrollAnimation> */}
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Project;
