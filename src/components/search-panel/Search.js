import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchCoin, searchChange, filter, getCoins } from "../../actions";
import { Label, Input, Button, AdvancedFilter,  Select, Wrapper, Some } from './Style';
import { Link } from 'react-router-dom';
import down from '../../icons/down.svg';
import up from '../../icons/up.svg';



class Search extends Component {

    state = {
        search: '',
        country: '',
        metal: '',
        quality: '',
        fromPrice: '',
        toPrice: '',
        fromYear: '',
        toYear: ''

    }

    componentDidMount(){
        this.props.getCoins();
    }

    search = () => {
        this.props.searchCoin(this.state);
        this.props.searchChange();
        if(this.props.filter){
            this.props.showFilter();
        }
    }

    render(){
        const { showFilter, filter, coins } = this.props;
        const { search, country, metal, quality, fromPrice, toPrice, fromYear, toYear } = this.state;
        return(
            <div>
                <div>
                    <Label>Input field</Label>
                </div>
                <Some>
                <Input onChange={(e) => this.setState({search: e.target.value})} value={search}/>
                <Link to='/search'><Button onClick={this.search}>Search</Button></Link>
                </Some>
                <div>
                <AdvancedFilter onClick={showFilter}>Advanced filter <img src={filter ? up : down} alt=""/></AdvancedFilter>
                {filter && <Wrapper>
                    <div>
                        <div>
                            <Label>Issuing country</Label>
                        </div>
                        <Select onChange={(e) => this.setState({country: e.target.value})} value={country}>
                            <option>Country</option>
                            {coins.map((coin) => {
                                return <option key={coin.id} value={coin.country}>{coin.country.toUpperCase()}</option>
                            })}
                        </Select>
                        <div>
                            <Label>Metal</Label>
                        </div>
                        <Select onChange={(e) => this.setState({metal: e.target.value})} value={metal}>
                            <option>Metal</option>
                            {coins.map((coin) => {
                                return <option key={coin.id} value={coin.metal}>{coin.metal.toUpperCase()}</option>
                            })}
                        </Select>
                        <div>
                            <Label>Quality of the coin</Label>
                        </div>
                        <Select onChange={(e) => this.setState({quality: e.target.value})} value={quality}>
                            <option>Quality</option>
                            {coins.map((coin) => {
                                    return <option key={coin.id} value={coin.quality}>{coin.quality.toUpperCase()}</option>
                                })}
                        </Select>
                    </div>
                    <div>
                        <div>
                            <Label>Price</Label>
                        </div>
                        <span>from</span>
                        <input onChange={(e) => this.setState({fromPrice: e.target.value})} value={fromPrice}/>
                        <span>to</span>
                        <input onChange={(e) => this.setState({toPrice: e.target.value})} value={toPrice}/>
                        <div>
                            <Label>Year of issue</Label>
                        </div>
                        <span>from</span>
                        <input onChange={(e) => this.setState({fromYear: e.target.value})} value={fromYear}/>
                        <span>to</span>
                        <input onChange={(e) => this.setState({toYear: e.target.value})} value={toYear}/>
                    </div>
                </Wrapper>}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        coins: state.coins
    };
  };

const mapDispatchToProps = {
    searchCoin: searchCoin,
    searchChange: searchChange,
    showFilter: filter,
    getCoins: getCoins,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
