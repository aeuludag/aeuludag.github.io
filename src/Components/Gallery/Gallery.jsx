import { Helmet } from "react-helmet-async"
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
            <Helmet>
                <title>Ahmet Emir's Designs</title>
                <link rel="canonical" href="https://aeuludag.github.io/#/gallery" />
            </Helmet>
            <h1 className="route-title">Design Gallery</h1>
            <p className="route-description">
                Arts of who he squeezes his own mind as if a lemon.
            </p>
            <div className="gallery-items">
                {designElements}
            </div>
        </div>)
}

function GalleryDesign({design}) {
    const id = design.id;
    const title = design.title;
    const description = design.description;
    const platform = design.platform;

    return (
        <div className="gallery-design" tabIndex={"0"}>
            <img className="design-image" src={`/designs/lowres/${id}.png`} alt={`Gallery design named ${title}`} loading="lazy" />
            <div className="design-buttons">
                <a className="design-button image-link" target="_blank" href={`/designs/${id}.png`} aria-label="Open design in high quality"><img src={openInNewImage} alt="Open in new tab" /></a>
                <p className="design-platform">{platform}</p>
            </div>
            <div className="design-details">
                <h1 className="design-title">{title}</h1>
                <p className="design-description">{description}</p>
            </div>
        </div>
    )
}

export default Gallery;