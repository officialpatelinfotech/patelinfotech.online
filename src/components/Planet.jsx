import React from 'react';

const Planet = ({ name, size, distance }) => {
    return (
        <div className="planet">
            <h2>{name}</h2>
            <p>Size: {size}</p>
            <p>Distance from Sun: {distance}</p>
        </div>
    );
};

export default Planet;
























