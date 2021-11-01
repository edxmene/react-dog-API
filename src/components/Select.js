import React, { useState,useEffect } from 'react'
import {getBreeds} from '../model/breedsModel';

const Select = ({updateDog,setFetching}) => {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        getBreeds().then(data => {
            setBreeds(data);
        })
    }, [])
    
    return (
        <select onChange={e => updateDog(e.target.value)}>
            {
            breeds.map((breed) => {
                 return <option value={breed.id} key={breed.id}>{breed.name}</option>
            })
            }
        </select>
    )
}

export default Select
