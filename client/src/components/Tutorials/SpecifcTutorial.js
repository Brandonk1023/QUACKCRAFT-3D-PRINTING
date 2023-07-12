import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const SpecificTutorial = ({ specificTutorial }) => {
    return (
 <Card sx={{ maxWidth: 400 }}>
            <CardMedia>
            <img  height="375" width="375" src={specificTutorial.image} alt={specificTutorial.title} />
            </CardMedia>
            <CardContent>
            <h3>{specificTutorial.title}</h3>
            <a href={specificTutorial.link} target="_blank" rel="noreferrer">Click here!</a>
            </CardContent>
        </Card>
    )
}

export default SpecificTutorial;