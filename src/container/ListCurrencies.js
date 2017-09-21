import React, { Component } from 'react';
import { connect } from 'react-redux';
import Currencies from '../presentational/Currencies';
import { addCurrency } from '../actions/manageCurrencies';

class ListCurrencies extends Component {
  addCurrency = currency => this.props.addCurrency(currency);

  render() {
    return (
      <Currencies
        currencies={this.props.currencies}
        onClick={this.addCurrency}
        buttonText={'Add Currency'}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCurrency: currency => dispatch(addCurrency(currency)),
});

export default connect(
  null,
  mapDispatchToProps
)(ListCurrencies);
