import React, { Component } from 'react';
import { connect } from 'react-redux';
import Currencies from '../presentational/Currencies';
import { addCurrency, removeCurrency } from '../actions/manageCurrencies';

class ListCurrencies extends Component {
  addCurrency = currency => this.props.addCurrency(currency);

  render() {
    return (
      <Currencies
        currencies={this.props.currencies}
        addCurrency={this.addCurrency}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCurrency: currency => dispatch(addCurrency(currency)),
  removeCurrency: currency => removeCurrency(currency),
});

export default connect(
  null,
  mapDispatchToProps
)(ListCurrencies);
