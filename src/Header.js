import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <Link to="/popular" className="active">Best</Link>
          <Link to="/hot">Hot</Link>
          <Link to="/rising">New</Link>
          <Link to="/controversial">Rising</Link>
          <Link to="/top">Top</Link>
          <Link to="/gilded">Gilded</Link>
        </ul>
      </div>

      <div className="header__right">
        
        <div className="header__user">

            <span>Harris Sultan</span>
            <span>💰 153 Kreddit </span>
        </div>

      </div>
    </div>
  );
}

export default Header;
