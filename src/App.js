import React, { useEffect } from 'react';
//COMPONENTS
import OrderPage from './components/OrderPage';


//! Main source of truth OrderPage
//! InputGroup is the three dynamically added inputfields in a div  
//! TouchableArea is just an expanded area for the onClick

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
      <OrderPage />
    </div>
  );
}

export default App;
