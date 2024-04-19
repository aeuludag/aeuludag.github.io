import { Link } from "react-router-dom";
import X from "../../assets/x.svg"
import designs from "../../designs"
import "./Gallery.css"
import { useState } from "react";


function Gallery() {
    const [currentDesign, setCurrentDesign] = useState(false)

    let designElements = []

    for (let i = 0; i < designs.length; i++) {
        let design = designs[i]
        let element = <GalleryDesign key={design.id} design={design} set={setCurrentDesign}/>;
        designElements.push(element);
    }

    return (
        <>
            <h1 className="route-title">Design Gallery</h1>
            <p className="route-description">Here are my designs, mostly made in Inkscape tool.</p>
            <div className="gallery-items">
                {designElements}
            </div>
            {currentDesign && <ZoomedDesign design={currentDesign} set={setCurrentDesign} />}
        </>)
}

function GalleryDesign(props) {
    const id = props.design.id;
    const title = props.design.title;
    const description = props.design.description;

    return (
        <div className="gallery-design" onClick={() => props.set(props.design)}>
            <img className="design-image" src={`/designs/${id}.png`} alt={description} />
            <div className="design-details">
                <h1 className="design-title">
                    {title}
                </h1>
                <p className="design-description">{description}</p>
            </div>
        </div>
    )
}

function ZoomedDesign(props) {
    const id = props.design.id;
    const title = props.design.title;
    const description = props.design.description;

    return (
    <div className="zoomed-design-wrapper">
        <div className="zoomed-design">
            <button className="close-button" onClick={() => props.set(null)}><img src={X} /></button>
            <img className="zoomed-image" src={`/designs/${id}.png`} alt={description} />
            <div className="zoomed-details">
                <h1 className="zoomed-title">
                    {title}
                </h1>
                <p className="zoomed-description">{description}</p>
            </div>
        </div>
    </div>
    )
}

export default Gallery;