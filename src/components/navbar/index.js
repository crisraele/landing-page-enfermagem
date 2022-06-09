import React from 'react';
import * as S from './styled';
import Fb from '../../image/icon-facebook.svg'
import Inst from '../../image/icon-instagram.svg'
import lin from '../../image/icon-linkedin.svg'
import logo from '../../image/Google_2015_logo.svg.png'



export const Navbar = () => {
    
    return(
        <S.Header>
            <S.Navegacao>
                <S.Lista>
                    <li onClick={() => document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' })}>Página Inicial</li>
                    <li onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}>Sobre Nós</li>
                    <li onClick={() => document.getElementById('service-section').scrollIntoView({ behavior: 'smooth' })}>Serviços</li>
                    <li onClick={() => document.getElementById('contato-section').scrollIntoView({ behavior: 'smooth' })}>Contate-nos</li>
                </S.Lista>
            </S.Navegacao>

            <S.Logo>
                <img src={logo} alt=''/>
            </S.Logo>
            
            <S.Icons>
                <div className='icon-facebook'>
                <img src={Fb}alt='icone do facebook'/>
                </div>
                <div className='icon-linkedin'>
                <img src={lin} alt='icone do linkedin'/>
                </div>
                <div className='icon-instagram'>
                <img src={Inst} alt='icone do Instagram' style={{width:"1.5rem", height:"1.5rem"}}/>
                </div>
            </S.Icons>
     </S.Header>
    );
}