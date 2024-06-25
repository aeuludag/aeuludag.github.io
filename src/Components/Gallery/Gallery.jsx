import openInNewImage from "../../assets/open_in_new.svg"
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
        <div className="gallery">
            <h1 className="route-title">Design Gallery</h1>
            <p className="route-description">Here are some of my designs, mostly made in Inkscape tool. Hover or tap on the images to see more detail.</p>
            <div className="gallery-items">
                {designElements}
            </div>
        </div>)
}

function GalleryDesign({design}) {
    const id = design.id;
    const title = design.title;
    const description = design.description;

    return (
        <div className="gallery-design" tabIndex={"0"}>
            <img className="design-image" src={`/designs/lowres/${id}.png`} alt={`${title} - ${description}`} />
            <div className="design-details">
                <h1 className="design-title">{title}</h1>
                <p className="design-description">{description}</p>
            </div>
            <div className="design-buttons">
                <a className="design-button image-link" target="_blank" href={`/designs/${id}.png`}><img src={openInNewImage} /></a>
            </div>
        </div>
    )
}

export default Gallery;