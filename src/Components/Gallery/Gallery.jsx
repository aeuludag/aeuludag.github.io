import { Link } from "react-router-dom";
import designs from "../../designs"
import "./Gallery.css"


function Gallery() {
    let designElements = []

    for (let i = 0; i < designs.length; i++) {
        let design = designs[i]
        let element = <GalleryDesign key={design.id} design={design} />;
        designElements.push(element);
    }

    return (
        <>
            <h1 className="route-title">Design Gallery</h1>
            <p className="route-description">Here are my designs, mostly made in Inkscape tool.</p>
            <div className="gallery-items">
                {designElements}
            </div>
        </>)
}

function GalleryDesign(props) {
    const id = props.design.id;
    const title = props.design.title;
    const description = props.design.description;

    return (
        <div className="gallery-design">
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

export default Gallery;