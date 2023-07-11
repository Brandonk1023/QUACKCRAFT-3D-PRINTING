import React, { useState } from "react";
import SpecificTutorial from "./SpecifcTutorial";
import DuckPrinter1 from "../../assets/tutorialsImages/DuckPrinter1.png"
import DuckPrinter2 from "../../assets/tutorialsImages/DuckPrinter2.png"
import DuckPrinter3 from "../../assets/tutorialsImages/DuckPrinter3.png"
import DuckPrinter4 from "../../assets/tutorialsImages/DuckPrinter4.png"

const Tutorials = () => {
    const [specificTutorial] = useState([
        {
            title: 'Printer Bed Leveling',
            link: 'https://all3dp.com/2/3d-printer-bed-leveling-step-by-step-tutorial/',
            image: DuckPrinter1,
        },
        {
            title: 'Choosing Printer Filament',
            link: 'https://www.bcn3d.com/how-to-choose-3d-printing-material/',
            image: DuckPrinter2,
        },
        {
            title: 'Printer Bed Adhesion',
            link: 'https://all3dp.com/2/3d-printer-bed-adhesion-all-you-need-to-know/',
            image: DuckPrinter3,
        },
        {
            title: 'Printer Layer Shifting',
            link: 'https://all3dp.com/2/layer-shifting-3d-printing-tips-tricks-to-solve-it/',
            image: DuckPrinter4,
        },
        
    ])
    return (
        <div>
            <h2>Tutorials</h2>
            <p>Please see the collected tutorials list below.  These resources belong to their respective owners and have been gathered here for ease of access.</p>
            <div>
                {specificTutorial.map((specificTutorial, index) => (
                    <SpecificTutorial key={index} specificTutorial={specificTutorial} />
                ))}
            </div>
        </div>
    )
}

export default Tutorials;