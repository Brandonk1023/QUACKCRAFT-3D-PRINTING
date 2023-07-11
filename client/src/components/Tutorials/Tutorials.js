import React, { useState } from "react";
import SpecificTutorial from "./SpecifcTutorial";
import DuckPrinter1 from "../../../public/assets/tutorialsImages/DuckPrinter1"
import DuckPrinter2 from "../../../public/assets/tutorialsImages/DuckPrinter2"
import DuckPrinter3 from "../../../public/assets/tutorialsImages/DuckPrinter3"
import DuckPrinter4 from "../../../public/assets/tutorialsImages/DuckPrinter4"

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