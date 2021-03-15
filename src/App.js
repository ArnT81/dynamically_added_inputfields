import React, { useEffect } from 'react';
//COMPONENTS
import OrderPage from './components/OrderPage';

//todo: If an div in the middle gets erased and you add a new one afterwards the key is not unique, find a better variable
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
