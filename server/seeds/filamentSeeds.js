const mongoose = require('mongoose');
const Filament = require('../models/Filament');

const filamentSeed = [
    {
        filamentType: 'PLA',
        printTemp: "180-220°C",
        bedTemp: "20-60°C",
        printSpeed: "60-150 mm/s",
    },
    {
        filamentType: 'ABS',
        printTemp: '210-250°C',
        bedTemp: '90-110°C',
        printSpeed: '60 mm/s',
    },
    {
        filamentType: 'PETG',
        printTemp: '220-250°C',
        bedTemp: '50-80°C',
        printSpeed: '50-60 mm/s',
    },
    {
        filamentType: 'Nylon',
        printTemp: '240-290°C',
        bedTemp: '55-65°C',
        printSpeed: '20 mm/s',
    },
    {
        filamentType: 'TPU',
        printTemp: '210-230°C',
        bedTemp: '30-60°C',
        printSpeed: '40-50 mm/s',
    }
]

module.exports = filamentSeed;