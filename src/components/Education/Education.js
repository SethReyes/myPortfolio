import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 > DigitalCrafts Bootcamp<span> March 2022 - September 2022</span></h2>
                                                    <p>I joined this bootcamp to get my start into tech! I completed the requirements for the <b>Web Development Bootcamp</b> certification. I learned how to write code primarily in Javascript and developed web apps using the <b>MERN</b> webstack. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Experience  <span>September 2019 - Present</span></h2>
                                                    <p>I am currently working as an <b>Environmental Engineer</b> at <a target="_blank" ></a> <b>Trinity Consultants</b> where I help
                                                    to help bring small businesses to large business the best environmental solutions for their needs. I primarily deal with air permitting and 
                                                    help clients stay in compliance with the state and the EPA. Here, I always look at ways to optimize or automate quarterly or year over year reports
                                                    any way possible. Additionally, I've mentored junior associates through their own projects and provided support when needed.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Experience  <span>September 2018 - September 2019</span></h2>
                                                    <p>I worked as an <b>Noise Consultant</b> at <a target="_blank" ></a> <b>CSTI Acoustics</b> where I developed my own Excel functions to aid in the 
                                                    calculations of several complex computations to perform many vibrational and acoustical analysis on large machinery (with unit tests). </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Undergrad at the University of Houston<span>2014-2018</span></h2>
                                                    <p>I have a <b>Bachelor of Science in Mechanical Engineering</b> and a minor in <b>Math</b>. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
