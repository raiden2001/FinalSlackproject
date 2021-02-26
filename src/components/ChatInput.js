import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'
import DeleteIcon from '@material-ui/icons/Delete'
//import ButtonBase from '@material-ui/core/ButtonBase';
//import {makeStyles} from 'material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("");


    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
    }


    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..." />
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send />
                    </SendButton>
                    
                    <Button variant="contained" disabled>
                    disabled
          
                     </Button>

                     <Button variant="contained" color="secondary" ClassName={button}
                     startIcon={<DeleteIcon/>}>
                         Delete
                     </Button>
                    <Button variant="contained" disabled color="secondary"
                    className={button} startIcon={<KeyboardVoiceIcon/>}>

                        Talk 
                    </Button>

                    <Button variant="contained" color="default"
                    className={button} startIcon={<CloudUploadIcon/>}>
                        Upload
                    </Button>
                </form>
                <Button variant="contained" color="primay" size="small"
                    className={button} startIcon={<SaveIcon/>}>
                        Save
                    </Button>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input:focus {
            outline: none;
        }
    }

`
const button = styled.div
`
background: #007a5a;
border-radius: 2px;
width: 32px;
height: 32px;
display: flex;

`

const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #148567
    }

`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`
