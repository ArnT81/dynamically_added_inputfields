import React, { useState, useEffect } from 'react';
//COMPONENTS
import InputGroup from '../InputGroup';
import TouchableArea from '../TouchableArea';
import Input from '../Input';
//STYLES
import styles from './orderpage.module.css';


function OrderPage() {
    const [customerDetails, setCustomerDetails] = useState()
    const [inputGroup, setInputGroup] = useState([{ id: 1 }])
    const [uniqueId, setUniqueId] = useState(1);
    const [order, setOrder] = useState([])

    //LIFECYCLEHOOKS
    useEffect(() => {
        setUniqueId(uniqueId + 1)
        return () => setUniqueId(uniqueId + 1)
    }, [inputGroup])

    //FUNCTIONS
    function handleChange(e) {
        setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value })
    }

    function clearInputFields() {
        let i;
        let inputFields = document.getElementsByTagName('input')
        for (i = 0; i < inputFields.length; i++) {
            inputFields[i].value = '';
        }
    }

    function addNewDiv() {
        setInputGroup([...inputGroup, ({ id: uniqueId })])
    }

    function cancel(e) {
        e.preventDefault();
        setCustomerDetails('');
        clearInputFields();
        setInputGroup([uniqueId + 1])
    }

    function send(e) {
        e.preventDefault();
        console.log('customer details', customerDetails);
        console.log('order', order);
    }

    function removeDiv(fieldToRemove) {
        // REMOVES VALUES FROM THE DIV INPUTS
        setOrder(order.filter((i) => i.id !== fieldToRemove))
        // REMOVES DIV FROM THE SCREEN
        if (inputGroup.length <= 1) return
        else {
            setInputGroup(inputGroup.filter((div) => div.id !== fieldToRemove))
        }
    }


    return (
        <div className={styles.orderpage}>
            <form>
                {/* DYNAMICALLY ADDED INPUTFIELDS */}
                {inputGroup.map((div) => {
                    return (
                        <InputGroup
                            key={div.id}
                            id={div.id}
                            removeDiv={removeDiv}
                            order={order}
                        />
                    )
                })}
                <TouchableArea
                    functionality={addNewDiv}>
                    +
                </TouchableArea>
                {/* CUSTOMER DETAILS */}
                <div className={styles.customerdetailscontainer}>
                    <Input
                        label="First Name:"
                        name="firstName"
                        handleChange={handleChange}
                    />
                    <Input
                        label="Last Name:"
                        name="lastName"
                        handleChange={handleChange}
                    />
                    <Input
                        label="Address:"
                        name="address"
                        handleChange={handleChange}
                    />
                    <Input
                        label="Zip Code:"
                        name="zip"
                        handleChange={handleChange}
                    />
                    <Input
                        label="City:"
                        name="city"
                        handleChange={handleChange}
                    />
                </div>
                <div className={styles.buttoncontainer}>
                    <button
                        className={styles.formbutton}
                        onClick={cancel}>
                        Cancel
                    </button>
                    <button
                        className={styles.formbutton}
                        onClick={send}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default OrderPage;

