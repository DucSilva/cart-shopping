import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
//component
import Subtotal from './components/subtotal/subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatdeTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    }
  }
  

  render() {
    return (
      <div className="container">
        <div className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails />
        </div>
      </div>
    );
  }

}

export default App;
