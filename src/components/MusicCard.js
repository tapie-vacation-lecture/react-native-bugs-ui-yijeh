import React from "react";
import "./MusicCard.css";

const MusicCard = ({ song, rank, onLike, onDislike }) => {
  return (
    <div className="music-card">
      <img src={song.image} alt={song.title} className="music-image" />
      <div className="music-content">
        <h2>{song.title}</h2>
        <p>{song.description}</p>
        <div className="button-group">
          <button onClick={onLike}>추천 {song.likes}</button>
          <button onClick={onDislike}>비추천 {song.dislikes}</button>
          <span className="song-rank">등수: {rank}위</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
