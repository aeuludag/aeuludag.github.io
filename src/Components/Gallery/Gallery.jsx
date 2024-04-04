import designs from "../../designs"
import "./Gallery.css"

function Gallery() {

    let designElements = []

    for (let i = 0; i < designs.length; i++) {
        let design = designs[i]
        let element = <GalleryDesign key={design.id} image={design.id} title={design.title} description={design.description} />;
        designElements.push(element);
    }

    return(<div className="gallery">
        {designElements}
    </div>)
}

function GalleryDesign(props) {
    return (<div className="gallery-design">
        <img className="design-image" src={`/designs/${props.image}.png`} alt={props.description} />
        <div className="design-details">
            <h1 className="design-title">{props.title}</h1>
            <p className="design-description">{props.description}</p>
        </div>
    </div>)
}

export default Gallery;