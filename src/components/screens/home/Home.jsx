import React, {useEffect, useState} from 'react'
import {cars as carsData} from '../../data/cars.data'
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./CreateCarForm/CreateCarForm";
const Home = () => {
    const [cars, setCars] = useState(carsData)

    useEffect(() => {
        console.log(cars)
    }, [cars])
    return (
        <div style={{textAlign:'center'}}>
            <h1>Cars Catalog</h1>
            <CreateCarForm setCars={setCars}/>
            <div>
                {cars.length ?
                    cars.map(car => (
                        <CarItem key={car.id} car={car}/>
                    ))
                    : <p>There are no cars</p>
                }
            </div>
        </div>
    )
}

export default Home