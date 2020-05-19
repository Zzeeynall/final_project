import React, { Component } from 'react';
import { Wrapper, Picture, TypeName, ShowAll } from './Style';
import { Link } from 'react-router-dom';
import right from '../../icons/right.svg';


class Type extends Component{

  render() {
    return (
        <Wrapper>
            <div>
                <TypeName>Bullion coins</TypeName>
                <ShowAll><Link to='/coins/1'>Show all <img src={right} alt=""/></Link></ShowAll>
                <Picture src="https://i.postimg.cc/pr92cQPx/South-Vietnamese-Dong-1.png" alt="Picture of coin"/>
            </div>
            <div>
                <TypeName>Exclusive coins</TypeName>
                <ShowAll><Link to='/coins/2'>Show all <img src={right} alt=""/></Link></ShowAll>
                <Picture src="https://i.postimg.cc/50S9F9nd/ISK-2.png" alt="Picture of coin"/>
            </div>
            <div>
                <TypeName>Commemorative coins</TypeName>
                <ShowAll><Link to='/coins/3'>Show all <img src={right} alt=""/></Link></ShowAll>
                <Picture src="https://i.postimg.cc/bY2cMwQz/Looney-1.png" alt="Picture of coin"/>
            </div>
        </Wrapper>
    
    );
  }
}

export default Type;