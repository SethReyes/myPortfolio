import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import headshot from "../images/Headshot.JPG";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div style={{ color: "black", fontWeight: "bold" }} className="tagtop">
          {" "}
          #hello_world{" "}
        </div>
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          {" "}
          #program_the_future{" "}
        </div>
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          {" "}
          # i_am_not_a_robot
        </div>
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Seth Reyes
          </Link>
        </h1>

        <img src={headshot} />
        <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL"
            rel="opener noreferrer"
            target="_blank"
            className="fa fa-envelope"
          ></a>{" "}
          sethareyes@gmail.com{" "}
        </p>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              Education
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              Interest
            </Link>
          </li>{" "}
          <li className="sidebar-nav-items">
            <Link smooth to="/#project" className="links">
              Projects
            </Link>
          </li>{" "}
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/SethReyes"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-github fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/seth-reyes-ba525898/"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:sethareyes@gmail.com"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-envelope fa-lg"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
