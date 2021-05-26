import React, { useState, useEffect } from 'react';
//COMPONENTS
import InputGroup from '../InputGroup';
import TouchableArea from '../TouchableArea';
import Input from '../Input';
//STYLES
import styles from './orderpage.module.css';


// render state is used to give unique key for the inputGroups

//todo tar inte bort värden när en av ordrarna försvinner

function OrderPage() {
    const [customerDetails, setCustomerDetails] = useState('')
    const [newInputfield, setNewInputfield] = useState([{ id: 1 }])
    const [render, setRender] = useState(1);
    const [order, setOrder] = useState([])


    useEffect(() => {
        setRender(render + 1)
    }, [newInputfield])

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
        setNewInputfield([...newInputfield, ({ id: render })])
    }

    function cancel() {
        setCustomerDetails('');
        clearInputFields();
        setNewInputfield([1])
    }

    function send(e) {
        e.preventDefault();
        console.log('customer details', customerDetails);
        console.log('order', order);
    }


    function removeDiv(fieldToRemove) {
        //  REMOVES THE INPUTVALUES FROM DIV
        let copyOfState = customerDetails;
        delete copyOfState[`product${fieldToRemove}`];
        delete copyOfState[`quantity${fieldToRemove}`];
        delete copyOfState[`price${fieldToRemove}`];
        setCustomerDetails(copyOfState);
        // REMOVES ENTIRE DIV
        if (newInputfield.length <= 1) return
        else {
            setNewInputfield(newInputfield.filter((i) => i.id !== fieldToRemove))
        }
    }

    return (
        <div className={styles.orderpage}>
            <form>
                {/* DYNAMICALLY ADDED INPUTFIELDS */}
                {newInputfield.map((field) => {
                    return (
                        <InputGroup
                            key={field.id}
                            id={field.id}
                            removeDiv={removeDiv}
                            order={order}
                        />
                    )
                })}

                <TouchableArea
                    functionality={addNewDiv}>
                    +
                </TouchableArea>

                {/* CONTACT INFORMATION */}
                <div className={styles.contactinfocontainer}>
                    <Input
                        label="Förnamn:"
                        name="firstName"
                        handleChange={handleChange}
                    />
                    <Input
                        label="Efternamn:"
                        name="lastName"
                        handleChange={handleChange}
                    />
                    <Input
                        label="Adress:"
                        name="address"
                        handleChange={handleChange}
                    />
                    <Input
                        label="Postnr:"
                        name="zip"
                        handleChange={handleChange}
                    />
                    <Input
                        label="Ort:"
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

