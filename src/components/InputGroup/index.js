import React from 'react';
//COMPONENTS
import TouchableArea from '../TouchableArea';
//STYLES
import styles from './inputgroup.module.css';


function InputGroup(props) {
    return (
        <div className={styles.inputgroup}>
            <label>Produkt:</label>
            <input
                autoFocus={true}
                enterKeyHint="next" //not working yet
                type="text"
                name={"product" + props.id}
                onChange={props.handleChange}>
            </input>
            <label>Pris:</label>
            <input
                type="text"
                name={"price" + props.id}
                onChange={props.handleChange}
                className={styles.price} />
            <label>Antal:</label>
            <input
                type="text"
                name={"quantity" + props.id}
                onChange={props.handleChange}
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
