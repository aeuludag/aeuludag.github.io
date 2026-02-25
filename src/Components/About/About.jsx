import { Helmet } from 'react-helmet';
import './About.css';
import TodaysSong from "../TodaysSong/TodaysSong.jsx";
import getQuote from "../WeeksQuote/WeeksQuote";
import JumpingText from '../JumpingText/JumpingText.jsx';

function About() {
    var quoteInfo = getQuote()
    return (
        <div className="about">
            <Helmet>
                <title>About Me</title>
                <link rel="canonical" href="https://aeuludag.github.io/#/about" />
            </Helmet>
            <h1 className="route-title">About Me</h1>
                <div className='about-upper'>
                    <img className='about-image' src="/limonene.gif" alt="About Me" />
                    <p className='about-organic'>fig. 1: <i>Limonene</i></p>
                </div>
            <div className='about-text'>
                <p>
                    <span className='about-selam'>Selam!</span> I'm <JumpingText text="Ahmet Emir" className={"about-magic about-jumping-text"}/>, a Molecular Biology and Genetics student at Bilkent University. <br />
                    I love science, programming, art and poetry.
                </p>
                {/* <JumpingText className={"about-jumping-text"} text="Selam again!!"/> */}
                <TodaysSong />
                <div className='about-quote-container'>
                    <img className={'about-quote-photo about-quote-photo-' + quoteInfo.photoId} src={`/quotePhotos/${quoteInfo.photoId}.png`}/>
                    <p className='about-quote'>"{quoteInfo.quote}"</p>
                    <p className='about-quote-me'>~weekly quote by {quoteInfo.by}~</p>
                </div>
                <div className='about-links'>
                    <a href="https://github.com/aeuludag" target="_blank" rel="noopener noreferrer">GitHub</a> -
                    <a href="https://www.linkedin.com/in/ahmetemiruludag/" target="_blank" rel="noopener noreferrer">LinkedIn</a> -
                    <a href="https://www.youtube.com/@lim10dev" target="_blank" rel="noopener noreferrer">YouTube</a> -
                    <a href="https://aeuludag.itch.io/" target="_blank" rel="noopener noreferrer">Itch</a>
                </div>
                <p className='about-sign'>-aeuludag, 26.02.26</p>
            </div>
        </div>
    )
}

export default About;