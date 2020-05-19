import React from 'react';
import { MainWrapper, Wrapper, Picture, Name, Desc } from './Style';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


const Coin = (props) => {
  return(
    <MainWrapper>
      {props.coins.map(coin =>{
          return (
          <Wrapper key={coin.id}>
              <Link to={`/desc/${coin.id}`}>
                <Picture src={coin.obverse_img}/>
              </Link>
              <div>
                <Name>{coin.name}</Name>
                <Desc>{coin.short_desc}</Desc>
              </div>
          </Wrapper>)
      })}
    </MainWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    coins: state.coinsByType
  };
};

export default connect(mapStateToProps)(Coin);