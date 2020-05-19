import React from 'react';
import { Header, Caption } from './Style';
import { Link } from 'react-router-dom';

import Search from '../search-panel';
import Type from '../coin-type';

const HomePage = () => {
    return(
        <>
            <Header>
                <Caption>Homepage</Caption>
                <Link to='/login'>Admin panel</Link>
            </Header>
            <Search/>
            <Type/>
        </>
    )
}

export default HomePage;