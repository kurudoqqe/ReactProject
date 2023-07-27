import React, {useState} from 'react'
import styles from './CreateCarForm.module.css'
const CreateCarForm = ({setCars}) => {
    const [data, setData] = useState({
        name: '',
        price: '',
        image: ''
    })
    const createCar = (event) => {
        event.preventDefault()
        setCars(prev => [...prev, {id: prev.length + 1, ...data}])
    }
    return (
        <form className={styles.form}>
            <input
                placeholder='Name'
                value={data.name}
                onChange={event => setData(prev => ({...prev, name: event.target.value}))}
            />
            <input
                placeholder='Price'
                value={data.price}
                onChange={event => setData(prev => ({...prev, price: event.target.value}))}
            />
            <input
                placeholder='Image'
                value={data.image}
                onChange={event => setData(prev => ({...prev, image: event.target.value}))}
            />
            <button className='btn' onClick={event => createCar(event)}>Create</button>
        </form>
    )
}

export default CreateCarForm