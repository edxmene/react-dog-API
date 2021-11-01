import React from 'react'

const Card = ({dog,updateDog}) => {
    return (
        <div className="card" onClick={()=>updateDog(dog.breed.id)}>
            <img
            src={dog.img}
            alt="dog"
            />
            <p>
                {dog.breed.name}
            </p>
        </div>
    )
}

export default Card
