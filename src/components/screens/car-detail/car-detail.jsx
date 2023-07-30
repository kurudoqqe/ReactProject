import React from 'react'
import {Link, useParams} from "react-router-dom";
import styles from './CarDetail.module.css'
import {cars} from "../../data/cars.data";

const CarDetail = () => {
    const { id } = useParams()
    const car = cars.find(car => car.id === parseInt(id))
    if (!car){
        return <div>Car not found</div>
    }
    return (
        <div>
            <div>
                <img src={car.image} alt={car.name} className={styles.image} />

            </div>
            <div className={styles.text}>
                <h2>{car.name}</h2>
                <p>Price: {car.price}</p>
            </div>
            <div className={styles.description}>{car.description}</div>
            <Link className='btn' to={'/'}>Return to Main Page</Link>

        </div>
    )
}

export default CarDetail