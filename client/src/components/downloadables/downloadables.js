import React, { useState } from 'react';
import './Downloadables.css';
import SpecificDownloadable from './SpecificDownloadable';
import ProfessorDuck from '../../assets/downloadables/ProfessorDuck.jpg';
import RockDuck from '../../assets/downloadables/RockDuck.png';
import RubberDuck from '../../assets/downloadables/RubberDuck.jpg';
import TouristDuck from '../../assets/downloadables/TouristDuck.jpg';
import VaderDuck from '../../assets/downloadables/VaderDuck.png';
import WizardDuck from '../../assets/downloadables/WizardDuck.jpg';




const Downloadables = () => {
    const [specificDownloadable] = useState([
        {
            Title: 'Rubber Duck',
            Content: 'A basic rubber duck model suitable for all print levels.',
            link: 'https://www.thingiverse.com/thing:139894',
            image: RubberDuck,
        },
        {
            Title: 'Wizard Sorting Duck',
            Content: 'A basic rubber duck model with a wizard sorting hat added to the top.',
            link: 'https://www.thingiverse.com/thing:2533687',
            image: WizardDuck,
        },
        {
            Title: 'The Rock Duck',
            Content: 'A duck model with a unique twist.  The duck has the head of Dwayne "The Rock" Johnson',
            link: 'https://www.thingiverse.com/thing:5152758',
            image: RockDuck,
        },
        {
            Title: 'Professor Duck',
            Content: 'A duck model dressed in professor attire.',
            link: 'https://www.thingiverse.com/thing:1115584',
            image: ProfessorDuck,
        },
        {
            Title: 'Tourist Duck',
            Content: 'A duck model that is ready to see the world, and document every memory using his trusty camera.',
            link: 'https://www.thingiverse.com/thing:721578',
            image: TouristDuck,
        },
        {
            Title: 'Duck Vader',
            Content: 'A duck model wearing the helmet of our favorite sith lord.',
            link: 'https://www.thingiverse.com/thing:4699129',
            image: VaderDuck,
        },
    ])
    return (
        <div>
            <h2 className='downloadables'>Downloadables</h2>
            <section>
                <div>
                    <p>Please browse our downloadables below!</p>
                    <div>{specificDownloadable.map((specificDownloadable, index) => (
                    <SpecificDownloadable key={index} specificDownloadable={specificDownloadable} />
                ))}</div>
                </div>
            </section>

        </div>
    )
}

export default Downloadables;