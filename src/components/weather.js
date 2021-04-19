import React from "react";
import "../Home.css";
import { Card } from 'react-bootstrap';

const CardExampleCard = ({weatherData}) => (
    <Card>
        <h1>{weatherData.name}</h1>
    </Card>
)