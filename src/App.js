import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from './actions/fetchCurrencies';

class Currency extends Component {
  render() {
    const { currency, ask, bid, code } = this.props.currency;
    return (
      <tr>
        <td>{currency}</td>
        <td>{ask}</td>
        <td>{bid}</td>
        <td>{code}</td>
      </tr>
    )
  }
}

const ListCurrencies = (props) => {
  const mapCurrencies = props.currencies.map(currency => <Currency key={currency.code} currency={currency} />)
  return (
    <table>
      <tbody>
        <tr>
          <th>Currency</th>
          <th>Ask</th>
          <th>Bid</th>
          <th>Code</th>
        </tr>
        {mapCurrencies}
      </tbody>
    </table>
  );
}

class App extends Component {

  componentDidMount() {
    this.props.fetchCurrencies('//api.nbp.pl/api/exchangerates/tables/C/?format=json')
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Choose yout favorite currencies</h2>
        </div>
        <ListCurrencies currencies={this.props.currencies} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currenciesReducer.currencies,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: (url) => dispatch(fetchCurrencies(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
