import React, { Component } from 'react';
import { MainWrapper, Picture, Info, Images } from './Style';
import { connect } from "react-redux";
import { getCoinById } from "../../actions";
import { Link } from 'react-router-dom';

import Spinner from '../spinner';

class CoinMoreInfo extends Component {

  componentDidMount(){
    this.props.getCoinById(this.props.id);
  }
  
  render(){
    const coin = this.props.coin.length ? this.props.coin[0] : [];
    const { name, obverse_img, reverse_img, face_value, short_desc, long_desc, 
      country, metal, quality, year_issue, weight, price, typeId } = coin
    return(
      <>
      {this.props.loading ? <Spinner/> : <MainWrapper>
        <Images>
          <div>
            <Picture src={obverse_img} />
          </div>
          <div>
            <Picture src={reverse_img} />
          </div>
        </Images>
        <Info>
          <h1>{name}</h1>
          <p>{short_desc}</p>
          <p>{long_desc}</p>
          <table>
            <tbody>
              <tr>
                <td>Issuing Country</td>
                <td>{country}</td>
              </tr>
              <tr>
                <td>Composition</td>
                <td>{metal}</td>
              </tr>
              <tr>
                <td>Denomination</td>
                <td>{face_value}</td>
              </tr>
              <tr>
                <td>Quality</td>
                <td>{quality}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{year_issue}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{weight}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{price}</td>
              </tr>
              </tbody>
          </table>
          <Link to={`/coins/${typeId}`}>Back to the list</Link>
        </Info>
      </MainWrapper>}
      </>
        )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    coin: state.coinById,
    id: ownProps.match.params.id
  };
};

const mapDispatchToProps = {
  getCoinById: getCoinById
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinMoreInfo);