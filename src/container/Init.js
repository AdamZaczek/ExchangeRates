import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListCurrencies from './ListCurrencies';
import FavoriteCurrencies from './FavoriteCurrencies';
import { fetchCurrencies } from '../actions/fetchCurrencies';
import { removeAllCurrencies } from '../actions/manageCurrencies';

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

class Init extends Component {
  componentDidMount() {
    this.props.fetchCurrencies('//api.nbp.pl/api/exchangerates/tables/C/?format=json');
  }

  render() {
    return (
      <div>
        {
          this.props.favoriteCurrencies.length > 0 &&
          <div>
            <h2>So Far You have chosen:</h2>
            <FavoriteCurrencies currencies={this.props.currencies} />
            <Button onClick={this.props.removeAllCurrencies}>Remove all</Button>
          </div>
        }
        {
          this.props.currencies.length ?
          <div>
            <h2>All currencies:</h2>
            <ListCurrencies currencies={this.props.currencies} />
          </div>
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
  removeAllCurrencies: () => dispatch(removeAllCurrencies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Init);
