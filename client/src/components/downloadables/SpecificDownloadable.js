import React from "react";
import './Downloadables.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const SpecificDownloadable = ({ specificDownloadable }) => {
    return (
 <Card sx={{ width: 800 }} className='card'>
            <CardMedia>
            <img  height="225" width="375" src={specificDownloadable.image} alt={specificDownloadable.title} />
            </CardMedia>
            <CardContent className="card-media">
            <h3>{specificDownloadable.title}</h3>
            <p>{specificDownloadable.content}</p>
            <Button variant="contained">
            <a href={specificDownloadable.link} target="_blank" rel="noreferrer" className="click-link">Click here!</a>
            </Button>
            </CardContent>
        </Card>
    )
}

export default SpecificDownloadable;