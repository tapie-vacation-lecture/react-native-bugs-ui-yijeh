import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MusicCard from "./components/MusicCard";
import "./App.css";
import image1 from "./react_image_file/1.png";
import image2 from "./react_image_file/2.png";
import image3 from "./react_image_file/3.png";
import image4 from "./react_image_file/4.png";

const App = () => {
  const musicData = [
    {
      id: 1,
      title: "hadboiled cafe - ptype",
      description: "피타입의 대표 곡...",
      image: image1,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      title: "FANACONDA - 화나",
      description: "화나의 대표 곡...",
      image: image2,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 3,
      title: "1945 해방 - 드렁큰 타이거",
      description: "드렁큰 타이거의 대표 곡...",
      image: image3,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 4,
      title: "sweety - Lord Kael",
      description: "very very good song",
      image: image4,
      likes: 0,
      dislikes: 0,
    },
  ];

  const [songs, setSongs] = useState(musicData);
  const [rankedSongs, setRankedSongs] = useState([]);
  const [topSong, setTopSong] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0); // 헤더 높이 상태 관리
  const headerRef = useRef(null);

  // 추천 수 계산 및 1등 업데이트
  useEffect(() => {
    const sortedSongs = songs
      .map((song) => ({
        ...song,
        score: song.likes - song.dislikes,
      }))
      .sort((a, b) => b.score - a.score || a.id - b.id);

    setRankedSongs(sortedSongs);
    setTopSong(sortedSongs[0].score > 0 ? sortedSongs[0] : null);
  }, [songs]);

  // 헤더 높이 계산
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight); // 헤더의 현재 높이 저장
    }
  }, [topSong]); // topSong 변경 시마다 재계산

  // 추천/비추천 업데이트 함수
  const updateSong = (id, type) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? {
              ...song,
              likes: type === "like" ? song.likes + 1 : song.likes,
              dislikes: type === "dislike" ? song.dislikes + 1 : song.dislikes,
            }
          : song
      )
    );
  };

  // 클릭 이벤트로 클립보드 복사
  useEffect(() => {
    const handleGlobalClick = (event) => {
      const tagName = event.target.tagName;

      // 버튼 요소는 제외
      if (tagName === "BUTTON") return;

      if (tagName === "IMG") {
        // 이미지 URL 복사
        const imageUrl = event.target.src;
        navigator.clipboard
          .writeText(imageUrl)
          .then(() => console.log(`이미지 URL이 클립보드에 복사되었습니다: ${imageUrl}`))
          .catch((err) => console.error("이미지 복사 실패:", err));
      } else if (tagName === "P" || tagName === "H1" || tagName === "H2" || tagName === "SPAN") {
        // 텍스트 복사
        const textContent = event.target.textContent.trim();
        navigator.clipboard
          .writeText(textContent)
          .then(() => console.log(`텍스트가 클립보드에 복사되었습니다: "${textContent}"`))
          .catch((err) => console.error("텍스트 복사 실패:", err));
      }
    };

    // 전역 클릭 이벤트 등록
    document.addEventListener("click", handleGlobalClick);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div className="app">
      <Header topSong={topSong} ref={headerRef} />
      <main style={{ marginTop: headerHeight }}>
        {rankedSongs.map((song, index) => (
          <MusicCard
            key={song.id}
            song={song}
            rank={index + 1}
            onLike={() => updateSong(song.id, "like")}
            onDislike={() => updateSong(song.id, "dislike")}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
