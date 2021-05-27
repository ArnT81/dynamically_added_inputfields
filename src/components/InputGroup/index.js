import React, { useState } from 'react';
//COMPONENTS
import TouchableArea from '../TouchableArea';
//STYLES
import styles from './inputgroup.module.css';


function InputGroup(props) {
    const [orderValues, setOrderValues] = useState()

    //FUNCTIONS
    function combineStates() {
        //todo should not save if not all fields are filled
        orderValues.id = props.id
        // PREVENT DUPLICATES   
        if (props.order.includes(orderValues) === false) props.order.push(orderValues);
        else return;
    }

    function handleChange(e) {
        setOrderValues({ ...orderValues, [e.target.name]: e.target.value })
    }


    return (
        <div className={styles.inputgroup}>
            <label>Product:</label>
            <input
                autoFocus={true}
                enterKeyHint="next" //not working yet
                type="text"
                name="product"
                onChange={handleChange}>
            </input>
            <label>Price:</label>
            <input
                type="text"
                name="price"
                onChange={handleChange}
                className={styles.price} />
            <label>Quantity:</label>
            <input
                onBlur={combineStates}
                type="text"
                name="quantity"
                onChange={handleChange}
                className={styles.quantity}
            />
            <TouchableArea
                functionality={() => props.removeDiv(props.id)}>
                -
            </TouchableArea>
        </div>
    )
}

export default InputGroup;
