import React from 'react'
import styles from "../Home.module.css";
import {Link} from "react-router-dom";

const CarItem = ({car}) => {
    return (
        <div className={styles.car} key={car.id}>
            <div className={styles.image} style={{
                backgroundImage: `url(${car.image})`
            }}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>
                    {new Intl.NumberFormat('ru-RU',{
                        style: 'currency',
                        currency: 'USD'
                    }).format(car.price)}
                </p>
                <Link className='btn' to={`/car/${car.id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default CarItem