import React, { Component } from 'react';
import { connect } from 'react-redux';
import Currencies from '../presentational/Currencies';
import { removeCurrency } from '../actions/manageCurrencies';

class FavoriteCurrencies extends Component {
  removeCurrency = currency => this.props.removeCurrency(currency);

  render() {
    return (
      <Currencies
        currencies={this.props.currencies}
        onClick={this.removeCurrency}
        buttonText={'Remove Currency'}
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
