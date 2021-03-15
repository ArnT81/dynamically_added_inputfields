import React, { useState } from 'react';
//COMPONENTS
import InputGroup from '../InputGroup';
import TouchableArea from '../TouchableArea';
import Input from '../Input';
//STYLES
import styles from './orderpage.module.css';


function OrderPage() {
    const [inputValue, setInputValue] = useState('')
    const [newInputfield, setNewInputfield] = useState([1])

    //FUNCTIONS
    function handleChange(e) {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    function clearInputFields() {
        let i;
        let inputFields = document.getElementsByTagName('input')
        for (i = 0; i < inputFields.length; i++) {
            inputFields[i].value = '';
        }
    }

    function addNewDiv() {
        setNewInputfield([...newInputfield, newInputfield.push(1)])
    }

    function cancel() {
        setInputValue('');
        clearInputFields();
        setNewInputfield([1])
    }

    function send(e) {
        e.preventDefault();
        console.log(inputValue);
    }

    function removeDiv(fieldToRemove) {
        //  REMOVES THE INPUTVALUES FROM DIV
        let copyOfState = inputValue;
        delete copyOfState[`product${fieldToRemove}`];
        delete copyOfState[`quantity${fieldToRemove}`];
        delete copyOfState[`price${fieldToRemove}`];
        setInputValue(copyOfState);
        // REMOVES ENTIRE DIV
        if (newInputfield.length <= 1) return
        else {
            setNewInputfield(newInputfield.filter((i) => i !== fieldToRemove))
        }
    }


    return (
        <div className={styles.orderpage}>
            <form>
                {/* DYNAMICALLY ADDED INPUTFIELDS */}
                {newInputfield.map((index) => {
                    return (
                        <InputGroup
                            key={index}
                            id={index}
                            handleChange={handleChange}
                            removeDiv={removeDiv}
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
                        Ångra
                    </button>
                    <button
                        className={styles.formbutton}
                        onClick={send}>
                        Beställ
                    </button>
                </div>
            </form>
        </div>
    )
}

export default OrderPage;

