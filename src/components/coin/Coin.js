import React, { useState, useEffect } from 'react';
import { MainWrapper, Wrapper, Picture, Name, Desc, Pagination } from './Style';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';



const Coin = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.coins.slice(indexOfFirstPost, indexOfLastPost);

  
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(props.coins.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return(
    <div>
      <MainWrapper>
        {currentPosts.map(coin =>{
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
      <nav>
      <Pagination className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='#'>
              {number}
            </a>
          </li>
        ))}
      </Pagination>
    </nav>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    coins: state.coinsByType
  };
};

export default connect(mapStateToProps)(Coin);