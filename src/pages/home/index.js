import React from 'react';
import * as Style from './styled';
import {Navbar} from '../../components/navbar';

function Home () {
    return(
    <div>
        <Navbar />
            <Style.Title>
                <span>Ajudamos você </span><br/>a receber seu bebê
            </Style.Title>
            <Style.Text>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Style.Text>
        <Style.Button  type='button'>Saiba mais</Style.Button>
        
    </div>
    );
}

export default Home;