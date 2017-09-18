import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from './actions/fetchCurrencies';

class App extends Component {

  componentDidMount() {
    this.props.fetchCurrencies('//api.nbp.pl/api/exchangerates/tables/C/?format=json')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Choose yout favorite currencies</h2>
        </div>
        The list will be here.
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
