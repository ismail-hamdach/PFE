import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    padding: 20px
`;

export const Card = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
`;

export const UserInfo = styled.View`
    flex-direction : row;
    justify-content: flex-start;
    padding: 5px;

`; 

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
   
`;

export const PostTime = styled.Text`
    font-size: 12px;
    color: #666;
    margin: 5px;
`;

export const PostText = styled.Text`
    font-size: 14px;
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 15px;
`;

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
    margin-bottom: 15px;
    
`;