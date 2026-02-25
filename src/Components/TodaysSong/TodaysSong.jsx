import redSquare from "../../assets/red.png";
import greenSquare from "../../assets/green.png";
import songs from "../../songs.js";
import songIcon from "../../assets/song.png";
import notes from "../../assets/notes.png";
import "./TodaysSong.css";
// import { useEffect, useState } from "react";

function TodaysSong() {

    // const [testIndex, setTestIndex] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTestIndex(prev => prev + 1);
    //     }, 500);
    //     return () => clearInterval(interval);
    // }, []);

    const randomOrder = [ 26, 75, 84, 0, 35, 76, 71, 60, 28, 24, 80, 50, 33, 14, 73, 64, 83, 32, 65, 34, 27, 82, 5, 23, 53, 39, 1, 8, 21, 78, 19, 2, 12, 55, 52, 6, 38, 48, 46, 25, 87, 79, 69, 63, 44, 13, 85, 16, 61, 81, 51, 9, 15, 43, 3, 17, 62, 49, 74, 7, 36, 54, 20, 68, 77, 45, 29, 41, 58, 18, 86, 47, 70, 67, 4, 37, 40, 22, 59, 72, 30, 66, 57, 11, 56, 42, 31, 10 ];
    const today = new Date();
    // const today = new Date(2000, 0, 1 + testIndex);
    const start = new Date(2000, 0, 1);
    const daysSince2000 = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    const dayIndex = daysSince2000 % songs.length;
    const song = songs[randomOrder[dayIndex]];
    // const song = songs[testIndex];
    const track = song.track;
    const artist = song.artist;

    return (
        <div className="todays-song">
            <div className="todays-song-header">
                <img className="todays-song-notes" src={notes} />
                <img className="todays-song-icon" src={songIcon} alt="Today's Song Icon" />
                <div className="todays-song-info">
                    <p className="todays-song-track">{track}</p>
                    <p className="todays-song-artist">{artist}</p>
                </div>
            </div>
            <div className="todays-song-links">
                <a className="todays-song-spotify" href={song.spotify} target="_blank" rel="noopener noreferrer" aria-label="Listen on Spotify">
                    <img src={greenSquare} alt="Green Square" />
                    Spotify
                </a>
                <a className="todays-song-yt" href={song.yt_music} target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                    <img src={redSquare} alt="Red Square" />
                    YT Music
                </a>
            </div>
        </div>
    );
}

export default TodaysSong;