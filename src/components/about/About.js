import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>Seth Reyes</b> and I am currently working as Environmental Engineer by day, a Software Engineer by night, and amateur photographer in the spaces between.
                         I graduated with a Bachelor of Science in Mechanical Engineering as well as from DigitalCraft's Web Development Bootcamp in September 2022. I enjoy developing not only web apps, 
                         but I really enjoy developing my brain with new challenges and exciting adventures. </p>
                        <p className={classes.br}>I love exploring new technologies and learning by doing, I like to stay on top of latest trends. I love optimizing every piece of code I write.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;