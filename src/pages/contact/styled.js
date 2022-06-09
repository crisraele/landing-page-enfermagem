import styled from 'styled-components';


export const Container = styled.div`
display: flex;
position: absolute;
width: 100%;
height: 453px;
background:#000;
border-radius: 0px 2px 0px 0px;
`

export const ImageContact = styled.div`
display: flex;
width: 260px;
height: 42px;
margin: 68px 50px;
`

export const Descricao = styled.div`
position: absolute;
width: 439px;
height: 136px;
margin: 148px 45px;

font-family: 'Hind Vadodara';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 159.3%;
letter-spacing: 0.02em;

color: #FFFFFF;
`

export const Text = styled.div`
position: absolute;
color: #FFFFFF;
margin: 295px 45px;
h3{
    font-family: 'Hind Vadodara';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 159.3%;
/* or 25px */

letter-spacing: 0.02em;

}
`
export const Input = styled.input`
box-sizing: border-box;
display: flex;
width: 265px;
height: 35px;
margin: 340px -315px;
background: #000000;
color: #FFFFFF;
border: 1px solid #FFFFFF;
`

export const Botton = styled.button`
box-sizing: border-box;
display: flex;
width: 58px;
height: 35px;
margin: 340px 315px;
background: #FFFFFF;
border: 1px solid #FFFFFF;
cursor: pointer;


h3{

font-family: 'Hind Vadodara';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 159.3%;
margin: 5px 4px 7px 10px;

letter-spacing: 0.02em;
color: #000000;
}
`