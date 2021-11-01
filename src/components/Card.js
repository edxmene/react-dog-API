import React from 'react'

const Card = ({dog}) => {
    return (
        <div className="card">
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
