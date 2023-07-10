const mongoose = require('mongoose');
const Downloadables = require('../models/Downloadables')

const DownloadablesSeed = [
    {
        Title: 'Rubber Duck',
        Content: 'A basic rubber duck model suitable for all print levels.',
        DownloadURL: 'https://www.thingiverse.com/thing:139894',
    },
    {
        Title: 'Wizard Sorting Duck',
        Content: 'A basic rubber duck model with a wizard sorting hat added to the top.',
        DownloadURL: 'https://www.thingiverse.com/thing:2533687',
    },
    {
        Title: 'The Rock Duck',
        Content: 'A duck model with a unique twist.  The duck has the head of Dwayne "The Rock" Johnson',
        DownloadURL: 'https://www.thingiverse.com/thing:5152758',
    },
    {
        Title: 'Professor Duck',
        Content: 'A duck model dressed in professor attire.',
        DownloadURL: 'https://www.thingiverse.com/thing:1115584',
    },
    {
        Title: 'Tourist Duck',
        Content: 'A duck model that is ready to see the world, and document every memory using his trusty camera.',
        DownloadURL: 'https://www.thingiverse.com/thing:721578',
    },
    {
        Title: 'Duck Vader',
        Content: 'A duck model wearing the helmet of our favorite sith lord.',
        DownloadURL: 'https://www.thingiverse.com/thing:4699129',
    }
]

module.exports = DownloadablesSeed;