import {useState, useEffect} from 'react';
import Player from './components/Player/Player';
import song1 from "./music/Har Har Shambhu Shiv Mahadeva_64(PagalWorld.com.se).mp3";
import song2 from "./music/somebody-new.mp3";
import song3 from "./music/public_music_on-n-on.mp3";
import song4 from "./music/Maan Meri Jaan(PagalWorld.com.se).mp3";
function App() {
  const [songs] = useState([
    {
      title: "song 1",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: song1
    },
    {
      title: "Song 2",
      artist:"har har sambhu",
      img_src: "./images/song-2.jpg",
      src:  song2
    },
    {
      title: "Song 3",
      artist: "music on",
      img_src: "./images/song-3.jpg",
      src:  song3
    },
    {
      title: "Song 4",
      artist: "maan meri jaan",
      img_src: "./images/song-4.jpg",
      src:  song4
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;