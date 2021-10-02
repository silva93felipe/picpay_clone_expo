import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
    background: #000;
    flex: 1;
    padding: 0 15px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin: 40px 0;
`;

export const InputText = styled.TextInput`
    color: #fff;
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 30px;
    padding: 10px 0;
    padding-left: 15px;
`;


export const Container = styled.ScrollView.attrs(()=> ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: "center",
        paddingLeft: 16,
    }, 
}))`
    background: #1e222b;
    /* height: 120px;
    width: 120px; */
    margin: 30px 0;
    border-radius: 8px;
`;

export const Option = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    margin-right: 16px;
    padding: 15px;
    justify-content: space-between;
`;
export const Img = styled.Image``;

export const Label = styled.Text`
    color: #fff;
    font-size: 16px;
`;