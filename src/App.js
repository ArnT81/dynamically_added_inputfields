import React, { useEffect } from 'react';
//COMPONENTS
import Form from './components/Form';


//! Main source of truth Form
//! InputGroup-component is the three dynamically added inputfields  
//! TouchableArea is just an expanded area for the onClick (used to add and remove "InputGroups")

function App() {

  useEffect(() => {
    window.addEventListener('keypress', preventReloadOnEnter)
    return window.addEventListener('keypress', preventReloadOnEnter)
  }, [])

  function preventReloadOnEnter(e) {
    e.keyCode === 13 && e.preventDefault()
  }

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
