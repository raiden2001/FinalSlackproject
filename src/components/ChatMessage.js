import React from 'react'
import styled from 'styled-components'
//import {makeStyles} from '@material-ui/icons/styles'

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p200x200/11800533_10152994436706776_2280432251874468435_n.jpg?_nc_cat=108&ccb=3&_nc_sid=7206a8&_nc_ohc=bOGGYpEta1kAX8pjOuQ&_nc_ht=scontent-ort2-2.xx&tp=6&oh=14381f1200699a86c352009fb26892dc&oe=605C4473" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97,96,97);
        font-size: 13px;
    }
`

const Text = styled.span``


