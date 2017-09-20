import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListCurrencies from './ListCurrencies';
import { fetchCurrencies } from '../actions/fetchCurrencies';

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
        <h2>Choose yout favorite currencies</h2>
        <ListCurrencies currencies={this.props.currencies} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.fetchCurrencies.currencies,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: url => dispatch(fetchCurrencies(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Init);
