import React from 'react';
export default function Pet({ name, animal, breed }) {
    return (
        <div>
            <h1>Lovely Pet {name}</h1>
            <h2>{animal}</h2>
            <h2>{breed}</h2>
        </div>
    )
}