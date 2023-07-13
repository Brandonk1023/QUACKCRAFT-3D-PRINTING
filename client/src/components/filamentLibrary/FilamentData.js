import React from "react";
import './Filament.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const FilamentData = ({ filamentData }) => {
    return (
        <Card sx={{ maxWidth: 800 }} className='card'>
            <CardMedia>
            <img height="300" width="375" src={filamentData.image} alt={filamentData.filamentType} />
            </CardMedia>
            <CardContent>
            <h3>{filamentData.filamentType}</h3>
            <ul>
                <li>Printer Temp: {filamentData.printTemp}</li>
                <li>Bed Temp: {filamentData.bedTemp}</li>
                <li>Print Speed: {filamentData.printSpeed}</li>
            </ul>
            </CardContent>
        </Card>
    )
}

export default FilamentData;