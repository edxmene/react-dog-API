import React, { useState,useEffect } from 'react'
import {getBreeds} from '../model/breedsModel';

const Select = ({getNewDog,setFetching}) => {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        getBreeds().then(data => {
            setBreeds(data);
        })
    }, [])
    const onchange = (e) => {
        getNewDog(e.target.value);
        setFetching(true);
    }
    return (
        <select onChange={onchange}>
            {
            breeds.map((breed) => {
                 return <option value={breed.id} key={breed.id}>{breed.name}</option>
            })
            }
        </select>
    )
}

export default Select
