import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu? '330px' : '100px'};
height: 100vh;
box-sizing: border-box;
padding: 65px 10px 10px 10px;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
width: 90%;
min-height: ${({ openMenu }) => openMenu? '40px' : '70px'};
border-radius: 10px;
padding: 2px 17px;
box-sizing: border-box;
display: flex;
flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
align-items: center;
justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};
cursor: pointer;
  &:hover {
    background-color: #f0f0f0;}

span {
font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
font-size: ${({ openMenu }) => openMenu? '16px' : '12px'};
}

:hover {
    background-color: #f2f2f2;
}

`;

export const ButtonIcon = styled.img`
width: 25px;
height: 24px;
margin-right: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: #d3d3d3;
  margin: 10px 0;
  visibility: visible;

`;