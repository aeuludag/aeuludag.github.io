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

    const randomOrder = [ 92, 0, 114, 73, 32, 14, 94, 109, 17, 121, 34, 127, 20, 72, 37, 118, 77, 60, 79, 9, 105, 81, 51, 82, 31, 132, 97, 63, 5, 99, 115, 12, 27, 125, 103, 53, 6, 86, 41, 40, 28, 45, 39, 49, 74, 107, 83, 2, 48, 113, 44, 110, 88, 11, 84, 43, 8, 22, 18, 13, 67, 16, 111, 36, 124, 42, 35, 70, 66, 54, 15, 131, 23, 61, 93, 116, 100, 101, 76, 129, 55, 65, 19, 96, 3, 119, 80, 126, 104, 4, 69, 120, 57, 46, 108, 56, 130, 75, 62, 78, 21, 58, 64, 89, 38, 26, 29, 47, 33, 133, 91, 85, 112, 1, 30, 128, 122, 102, 117, 87, 68, 59, 123, 98, 71, 7, 52, 24, 10, 95, 106, 25, 50, 90 ];
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