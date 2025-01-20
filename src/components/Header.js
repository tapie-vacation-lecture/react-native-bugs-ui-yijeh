import React, { forwardRef } from "react";
import "./Header.css";

const Header = forwardRef(({ topSong }, ref) => {
  return (
    <header className="header" ref={ref}>
      <h1>music recommendation</h1>
      {topSong && (
        <div className="top-song-banner">
          <div className="top-song">
            <img
              src={topSong.image}
              alt={topSong.title}
              className="top-song-image"
            />
            <div className="top-song-info">
              <p>추천수 1등!</p>
              <h2>{topSong.title}</h2>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

export default Header;
