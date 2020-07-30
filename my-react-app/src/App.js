import React from 'react';
import {Route} from 'react-router-dom'
import Checkout from './Checkout.js';

function App() {
  return (
    <div>
      <Route path='/checkout'>
        <Checkout/>
      </Route>
    </div>
  );
}

export default App;
