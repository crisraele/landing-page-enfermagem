import React from 'react';
import * as Style from './styled';
import {Navbar} from '../../components/navbar';
import home from '../../image/Home.png';



function Home () {
    return(
    <div>
        <Navbar />

        <Style.Image>
            <img src={home}  alt=''/>
        </Style.Image>
        
            <Style.Title>
                <span>Ajudamos você </span><br/>a receber seu bebê
            </Style.Title>
            
            <Style.Text>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Style.Text>

        <Style.Button  type='button'>
        <h3> SAIBA MAIS </h3> 
            </Style.Button>

    </div>
    );
}

export default Home;