import React, {useMemo} from 'react'
import {cars} from '../../data/cars.data'
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./CreateCarForm/CreateCarForm";
const Home = () => {
    const filtredCars = useMemo(
        () => cars.filter(car => car.price > 120000), []
    )
    return (
        <div style={{textAlign:'center'}}>
            <h1>Cars Catalog</h1>
            <CreateCarForm/>
            <div>
                {filtredCars.length ?
                    filtredCars.map(car => (
                        <CarItem key={car.id} car={car}/>
                    ))
                    : <p>There are no cars</p>
                }
            </div>
        </div>
    )
}

export default Home