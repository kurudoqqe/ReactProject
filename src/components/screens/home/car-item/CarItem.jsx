import React from 'react'
import styles from "../Home.module.css";

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
                <button className={styles.button}>Read More</button>
            </div>
        </div>
    )
}

export default CarItem