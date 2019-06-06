import React from 'react';
import Header from './Header';
import table from './table';
import ProductGroup from './ProductGroup';
import {BrowserRouter,Route} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <div className="middle">
          <Header/>
          <Route path='/header' component={Header}></Route>
          <Route path='/productGroup' component={ProductGroup}></Route>
          <Route path='/graph' component={table}></Route>
          <Route path='/productDetails/:idParam' component={ProductDetails}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
