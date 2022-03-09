import React from "react";
import "./SideNav.css";
import kreddit1 from './kreddit1.png'

import { Link } from "react-router-dom";

function SideNav() {
  const menus = [
    { to: "/popular", text: "Popular" },
    { to: "/all", text: "All" },
    { to: "/random", text: "Random" },
  ];

  const subreddits = [
    "react",
    "javascript",
    "node",
    "java",
    "python",
    "SQL",
    "C++",
    'C',
    'Scratch', 
    'typescript',
    'angular',
    'vue',
    'ruby',
    'sinatra',
    'rails',
    'mongo'
  ];
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img src={kreddit1} />
      </div>

      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search" />
        <i className="fas fa-search"></i>
      </div>

      <div className="sidenav__link">
        <ul className="sidenav__menu">
          {menus.map((menu) => (
            <li>
              <Link to={menu.to}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        
        <hr />
        <h1 style={{marginLeft: '15px'}}>Sub Kreddit</h1>
        <ul className="sidenav__subreddit">
          {subreddits.map(subreddit => (
              <li><Link to={`/r/${subreddit}`}>{subreddit}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
