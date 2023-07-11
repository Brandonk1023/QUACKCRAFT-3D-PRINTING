import React from 'react';
import FilamentData from './FilamentData'
import Filament1 from "../../assets/filamentImages/Filament1"
import Filament2 from "../../assets/filamentImages/Filament2"
import Filament3 from "../../assets/filamentImages/Filament3"
import Filament4 from "../../assets/filamentImages/Filament4"
import Filament5 from "../../assets/filamentImages/Filament5"


const FilamentLibrary = () => {
    const [filamentData] = useState([
        {
            filamentType: 'PLA',
            printTemp: "180-220°C",
            bedTemp: "20-60°C",
            printSpeed: "60-150 mm/s",
            image: Filament1,
        },
        {
            filamentType: 'ABS',
            printTemp: '210-250°C',
            bedTemp: '90-110°C',
            printSpeed: '60 mm/s',
            image: Filament2,
        },
        {
            filamentType: 'PETG',
            printTemp: '220-250°C',
            bedTemp: '50-80°C',
            printSpeed: '50-60 mm/s',
            image: Filament3,
        },
        {
            filamentType: 'Nylon',
            printTemp: '240-290°C',
            bedTemp: '55-65°C',
            printSpeed: '20 mm/s',
            image: Filament4,
        },
        {
            filamentType: 'TPU',
            printTemp: '210-230°C',
            bedTemp: '30-60°C',
            printSpeed: '40-50 mm/s',
            image: Filament5
        }
    ])
    return (
        <div>
            <h2>Filament Information</h2>
            <div>
            {}
            </div>
        </div>
    )
}

export default FilamentLibrary;