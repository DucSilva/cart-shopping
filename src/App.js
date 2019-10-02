import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
import { connect } from 'react-redux';
import {handleChange} from './actions/promoCodeActions';
//component 
import Subtotal from './components/subtotal/subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatdeTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      total: 200,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }
  
  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.0875
    }, () => {
      this.setState({
        estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
      })
    })
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT'){
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      }, () =>{
        this.setState({
          disablePromoButton: true
        })
      })
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
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr />
          <PromoCodeDiscount 
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange}) (App);
