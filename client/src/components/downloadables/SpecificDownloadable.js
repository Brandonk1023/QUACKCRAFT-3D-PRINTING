import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const SpecificDownloadable = ({ specificDownloadable }) => {
    return (
 <Card sx={{ maxWidth: 400 }}>
            <CardMedia>
            <img  height="375" width="375" src={specificDownloadable.image} alt={specificDownloadable.title} />
            </CardMedia>
            <CardContent>
            <h3>{specificDownloadable.title}</h3>
            <p>{specificDownloadable.content}</p>
            <Button variant="contained">
            <a href={specificDownloadable.link} target="_blank" rel="noreferrer">Click here!</a>
            </Button>
            </CardContent>
        </Card>
    )
}

export default SpecificDownloadable;