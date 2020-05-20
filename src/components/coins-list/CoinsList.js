import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCoinsByType, searchChange, clearListOfcoin } from "../../actions";
import { Header, Caption, Nav } from './Style';
import { Link } from 'react-router-dom';

import Coin from '../coin';
import Search from '../search-panel';
import Spinner from '../spinner';


class CoinsList extends Component {
  
  componentDidMount(){
    const { searchState, changeSearchState, getCoinsByType, type } = this.props;
    if(searchState){
      getCoinsByType(type);
    }else{
      changeSearchState();
    }
  }

  componentWillUnmount(){
    this.props.clearListOfcoin();
  }
  
  render(){
    return(
      <div>
        <Header>
          <Caption>List of the coins</Caption>
          <Link to='/login'>Admin panel</Link>
        </Header>
        <Nav><Link to='/'>Homepage</Link> — List of the coins</Nav>
        <Search/>
        {this.props.loading ? <Spinner/> : <Coin/>}
      </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    searchState: state.search,
    type: ownProps.match.params.type,
    coins: state.coinsByType
  };
};

const mapDispatchToProps = {
  getCoinsByType: getCoinsByType,
  changeSearchState: searchChange,
  clearListOfcoin: clearListOfcoin
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);