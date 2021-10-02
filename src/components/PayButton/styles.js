import styled from 'styled-components';
import {LinearGradient} from 'expo-linear-gradient';

// Posso colocar a biblioteca styled e chamar a propriedade com o styled.h1 ou
// Posso dizer que quero alterar diretamente a propriedade com styled(h1)pode ser em criados ou em de outras bibliotecas 
export const Button = styled(LinearGradient) `
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`

export const Label = styled.Text `
    font-size: 12px;
    color: ${({ focused }) => focused ? '#000' : '#fff'};
`