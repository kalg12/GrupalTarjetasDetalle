import React from 'react'
import { useParams } from 'react-router';

export const DetallePelicula = () => {
    const { id } = useParams();
    return (
        <div>
            DetallePelicula {id}
        </div>
    )
}
