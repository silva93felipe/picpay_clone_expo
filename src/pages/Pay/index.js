import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Container, Img, InputText, Label, Option, Title, Wrapper} from './style'

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'


export default function Pay() {
    const items = [
        {
            key: String(Math.random()),
            img: img1,
            label: "Recarga"
        },
        {
            key: String(Math.random()),
            img: img2,
            label: "Uber"
        },
        {
            key: String(Math.random()),
            img: img3,
            label: "Ônibus"
        },
       
    ]
    return (
        <Wrapper>
            <Title>Pagar</Title>
            <InputText placeholder="O que você quer pagar?" color="#fff"></InputText>

            <Container>
                {/* {items.map((item) =>(
                    <Option key={item.key}>
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>
                        <Label>{item.label}</Label>
                    </Option>
                ))} */}
            </Container>
            
        </Wrapper>
    )
}   