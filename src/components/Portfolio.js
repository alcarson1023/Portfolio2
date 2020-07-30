import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <div style={{margin: '2vw 15vw 3vw 15vw'}}>
    <iframe title='introVid' style={{}} src="https://player.vimeo.com/video/287731187?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <table className="table" style={{}}>
      <thead>
        <tr>
          <th style={{width: '15vw'}}>Title</th>
          <th style={{width: '15vw'}}>Description</th>
          <th style={{width: '15vw'}}>Languages Used</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to={"/"}>Site-ception</Link>
          </td>
          <td>
            My portfolio site, developed to display what I've learned about React.
          </td>
          <td>React, JSX, HTML, CSS</td>
        </tr>
        <tr>
          <td>
            <Link to={"/lawshield"}>LawShield</Link>
          </td>
          <td>
            A collection of pages built during my time with U.S. LawShield, showcasing bold, concise designs.
          </td>
          <td>WordPress, HTML, CSS</td>
        </tr>
        <tr>
          <td>
            <Link to={"/fcg"}>First Cornerstone</Link>
          </td>
          <td>
            A collection of pages built during my time with First Cornerstone Group, all self-designed and executed. These items highlight what my work looks like when I'm given free reign.
          </td>
          <td>WordPress, HTML, CSS</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
