import React from 'react';
import * as C from './styled';
import logo from '../../image/Google_2015_logo.svg.png';


function Contact () {
    return(
        <C.Container>
           <C.ImageContact>
               <img src={logo} alt='logo' />
           </C.ImageContact>

           <C.Descricao>
               <p>
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               It has survived not only five centuries.
               </p>
           </C.Descricao>

           <C.Text>
               <h3>FALE COM A GENTE!</h3>
           </C.Text>
           <C.Input placeholder='INSIRA SEU EMAIL'></C.Input>

           <C.Botton type='button'>
            <h3> SEND </h3>
           </C.Botton>

        </C.Container>

    );
}

export default Contact;