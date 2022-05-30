import React from 'react';
import * as Style from './styled';
import {Navbar} from '../../components/navbar';

function Home () {
    return(
    <div>
        <Navbar />
        <Style.Button  type='button'>Saiba mais</Style.Button>
        
    </div>
    );
}

export default Home;