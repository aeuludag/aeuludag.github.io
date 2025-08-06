import { Helmet } from 'react-helmet';
import './About.css';
import TodaysSong from "../TodaysSong/TodaysSong.jsx";

function About() {
    return (
        <div className="about">
            <Helmet>
                <title>About Me</title>
                <link rel="canonical" href="https://aeuludag.github.io/#/about" />
            </Helmet>
            <h1 className="route-title">About Me</h1>
                <div className='about-upper'>
                    <img className='about-image' src="/limonene.gif" alt="About Me" />
                    <p className='about-organic'>fig. 1: <i>Lemonene</i></p>
                </div>
            <div className='about-text'>
                <p>
                    Hello! I'm Ahmet Emir, a soon-to-be Molecular Biology and Genetics student at Bilkent University. <br />
                    I love science, programming, art and poetry.
                </p>
                <p>Song of the day:</p>
                <TodaysSong />
                <div className='about-links'>
                    <a href="https://github.com/aeuludag" target="_blank" rel="noopener noreferrer">GitHub</a> -
                    <a href="https://www.linkedin.com/in/ahmetemiruludag/" target="_blank" rel="noopener noreferrer">LinkedIn</a> -
                    <a href="https://aeuludag.itch.io/" target="_blank" rel="noopener noreferrer">Itch</a>
                </div>
                <p className='about-sign'>-aeuludag, 06.08.25</p>
            </div>
        </div>
    )
}

export default About;