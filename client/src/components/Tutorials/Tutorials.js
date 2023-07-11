import React, { useState } from "react";
import SpecificTutorial from "./SpecifcTutorial";

const Tutorials = () => {
    const [specificTutorial] = useState([
        {
            title: 'Printer Bed Leveling',
            link: 'https://all3dp.com/2/3d-printer-bed-leveling-step-by-step-tutorial/',
            image: '',
        },
        {
            title: '',
            link: '',
            image: '',
        },
        {
            title: '',
            link: '',
            image: '',
        },
        {
            title: '',
            link: '',
            image: '',
        },
        
    ])
    return (
        <div>
            <h2>Tutorials</h2>
            <p>Please see the collected tutorials list below.  These resources belong to their respective owners and have been gathered here for ease of access.</p>
            <div>
                {SpecificTutorial.map((specificTutorial, index) => (
                    <SpecificTutorial key={index} specificTutorial={specificTutorial} />
                ))}
            </div>
        </div>
    )
}

export default Tutorials;