import React, { useState, useEffect } from 'react';
//COMPONENTS
import TouchableArea from '../TouchableArea';
//STYLES
import styles from './inputgroup.module.css';


function InputGroup(props) {

    const [state, setstate] = useState()

    useEffect(() => {
        // console.log(state)
        props.inputValue.order && props.inputValue.order.push(state)

    }, [props.send])

    function handleChange(e) {
        setstate({ ...state, [e.target.name]: e.target.value })
    }


    return (
        <div className={styles.inputgroup}>
            <label>Produkt:</label>
            <input
                autoFocus={true}
                enterKeyHint="next" //not working yet
                type="text"
                name={"product" + props.id}
                onChange={handleChange}>
            </input>
            <label>Pris:</label>
            <input
                type="text"
                name={"price" + props.id}
                onChange={handleChange}
                className={styles.price} />
            <label>Antal:</label>
            <input
                type="text"
                name={"quantity" + props.id}
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
