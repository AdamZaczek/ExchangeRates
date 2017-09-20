import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListCurrencies from './ListCurrencies';
import FavoriteCurrencies from './FavoriteCurrencies';
import { fetchCurrencies } from '../actions/fetchCurrencies';

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

class Init extends Component {
  componentDidMount() {
    this.props.fetchCurrencies('//api.nbp.pl/api/exchangerates/tables/C/?format=json');
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.favoriteCurrencies.length > 0 &&
          <div>
            <h2>So Far You have chosen:</h2>
            <FavoriteCurrencies currencies={this.props.currencies} />
            <h2>Remaining currencies:</h2>
          </div>
        }
        {
          this.props.currencies.length ?
          <ListCurrencies currencies={this.props.currencies} />
          :
          <div>Loading data...</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.fetchCurrencies.currencies,
  favoriteCurrencies: state.manageCurrencies.currencies,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: url => dispatch(fetchCurrencies(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Init);
