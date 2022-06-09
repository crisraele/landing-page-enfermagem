import React from 'react';
import * as S from './styled';
import  quemSomos from '../../image/quem-somos.png';

function AboutUs () {
    return(
        <S.Container>
            <img src={quemSomos} alt='Foto da enfermeira Joana'/>      
        
                <S.Title>
                   <h2> Quem Somos </h2> 
                </S.Title>
                    <S.Sobre>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </S.Sobre>
        <S.Botao  type='button'>
                <h3> SAIBA MAIS </h3>
        </S.Botao>
        </S.Container>

    );
}

export default AboutUs;