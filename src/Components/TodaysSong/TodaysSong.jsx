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

    const randomOrder = [25, 54, 53, 2, 60, 13, 44, 34, 45, 1, 50, 36, 8, 19, 10, 55, 38, 27, 11, 32, 24, 51, 20, 40, 4, 29, 49, 14, 59, 3, 17, 6, 26, 28, 33, 7, 12, 52, 42, 56, 48, 15, 22, 31, 18, 37, 23, 41, 5, 21, 30, 47, 16, 43, 39, 9, 57, 35, 58, 46, 0];
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