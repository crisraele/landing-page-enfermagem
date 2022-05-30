import React from 'react';
import { Navegacao } from './styled';
import { Icons } from './styled';
import {Lista} from './styled';

export const Navbar = () => {
    return(
        <>
            <Navegacao>
                <Lista>
                    <li>Página Inicial</li>
                    <li>Sobre Nós</li>
                    <li>Serviços</li>
                    <li>Contate-nos</li>
                </Lista>
            </Navegacao>

            <div className='logo'>
                <img src='' alt=''/>

            </div>

            <Icons>
                <div className='icon-facebook'>
                <img src='/src/image/icon-facebook.svg' alt='icone do facebook'/>
                </div>
                <div className='icon-linkedin'>
                <img src='/src/image/icon-linkedin.svg' alt='icone do linkedin'/>
                </div>
                <div className='icon-instagram'>
                <img src='/src/image/instagram.png' alt='icone do Instagram'/>
                </div>
            </Icons>
        </>
    );
}