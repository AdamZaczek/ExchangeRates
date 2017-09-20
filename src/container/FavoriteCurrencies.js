import React, { Component } from 'react';
import { connect } from 'react-redux';
import Currencies from '../presentational/Currencies';
import { addCurrency, removeCurrency } from '../actions/manageCurrencies';

class FavoriteCurrencies extends Component {
  addCurrency = currency => this.props.addCurrency(currency);

  render() {
    return (
      <Currencies
        currencies={this.props.currencies}
        removeCurrency={this.addCurrency}
      />
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.manageCurrencies.currencies,
});

const mapDispatchToProps = dispatch => ({
  removeCurrency: currency => dispatch(removeCurrency(currency)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteCurrencies);
