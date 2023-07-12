import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FilamentData = ({ filamentData }) => {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardMedia>
            <img height="375" src={filamentData.image} alt={filamentData.filamentType} />
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