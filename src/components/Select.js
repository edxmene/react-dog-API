import React, { useState,useEffect } from 'react'
import {getBreeds} from '../model/breedsModel';
import Error from './Error';

const Select = ({updateDog}) => {
    const [breeds, setBreeds] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getBreeds()
        .then(data => {
            setBreeds(data);
            setError(null);
        })
        .catch((error)=>{
            console.log(error);
            setError("Error loading the breeds");
        })
    }, [])
    
    return (
        <div>
            <select onChange={e => updateDog(e.target.value)}>
                {
                breeds.map((breed) => {
                    return <option value={breed.id} key={breed.id}>{breed.name}</option>
                })
                }
            </select>
            {error && <Error error={error}/>}
        </div>
    )
}

export default Select
