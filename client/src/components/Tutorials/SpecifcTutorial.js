import React from "react";

const SpecificTutorial = ({ specificTutorial }) => {
    return (
        <div>
            <image src={specificTutorial.image} alt={specificTutorial.title} />
            <h3>{specificTutorial.title}</h3>
            <a href={specificTutorial.link} target="_blank" rel="noreferrer">Click here!</a>
        </div>
    )
}

export default SpecificTutorial;