import React from "react";

const FilamentData = ({ filamentData }) => {
    return (
        <div>
            <img src={filamentData.image} alt={filamentData.filamentType} />
            <h3>{filamentData.filamentType}</h3>
            <ul>
                <li>Printer Temp: {filamentData.printTemp}</li>
                <li>Bed Temp: {filamentData.bedTemp}</li>
                <li>Print Speed: {filamentData.printSpeed}</li>
            </ul>
        </div>
    )
}

export default FilamentData;