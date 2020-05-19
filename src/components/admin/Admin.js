import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCoins, deleteCoin } from "../../actions";
import { MainWrapper, Coins, Caption, Wrapper, Picture, AddWrapper, Plus, EditButton, DeleteButton, Name, Desc } from './Style';
import { Link, Redirect } from 'react-router-dom';

import Search from '../search-panel';

class Admin extends Component{

    componentDidMount(){
        this.props.getCoins();
    }

    render(){
        if(!this.props.login){
            return <Redirect to='/' />
        }
        return(
            <div>
                <Caption>Admin Panel</Caption>
                <Search/>
                <Coins>
                    {this.props.coins.map(coin =>{
                        return (
                            <MainWrapper key={coin.id}>
                                <Wrapper>
                                    <Picture src={coin.obverse_img}/>
                                    <div>
                                        <Name>{coin.name}</Name>
                                        <Desc>{coin.short_desc}</Desc>
                                    </div>
                                </Wrapper>
                                <div>
                                    <Link to={`/edit/${coin.id}`}><EditButton>Edit</EditButton></Link>
                                    <DeleteButton onClick={() => this.props.deleteCoin(coin.id)}>Delete</DeleteButton>
                                </div>
                            </MainWrapper>)
                    })}
                </Coins>
                <AddWrapper>
                    <Plus>+</Plus>
                    <div>
                        <Link to='/add'>Add a new coin</Link>
                    </div>
                </AddWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coins: state.coins,
        login: state.login
    };
  };
  
  const mapDispatchToProps = {
    getCoins: getCoins,
    deleteCoin: deleteCoin
  };

export default connect(mapStateToProps, mapDispatchToProps)(Admin);