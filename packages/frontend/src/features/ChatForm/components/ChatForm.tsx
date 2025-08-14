import { Box, Button, TextField, useTheme } from '@mui/material';
import { useState } from 'react';
import { LuSendHorizontal } from 'react-icons/lu';
import { MdOutlineAttachFile } from 'react-icons/md';
import { useChatMessages } from 'shared/model/chatMessages';
import { MessageType } from 'shared/types/messages';


export function ChatForm() {
    const { messages, setMessages } = useChatMessages() 
    const [text, setText] = useState("")
    const theme = useTheme() 


    function handleMessage() {
        if (text.trim()) {
            const newMessage: MessageType = {
                id: Math.random() * 1000000,
                type: "user",
                text: text
            }

            setMessages([...messages, newMessage])

            setText("")
        }

    }


    return (
        <Box component={"form"} sx={{display: "flex", alignItems: "flex-end", gap: 1, width: "60%", minWidth: "300px", px: "20%", py: 5}}>
            <Button sx={{height: "40px"}} size="small">
                <MdOutlineAttachFile color={theme.palette.text.secondary} size={25} />
            </Button>

            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                multiline 
                sx={{
                    scrollbarColor: "#000", 
                    msScrollbarTrackColor: "black"

                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();

                        handleMessage()
                    }
                }}
                maxRows={7} 
                placeholder="Спросите о чем-нибудь..." 
                size="small" 
            /> 
            
            <Button onClick={handleMessage} sx={{height: "40px"}} size="small">
                <LuSendHorizontal color={theme.palette.text.secondary} size={25} />
            </Button>
        </Box>
    )
}
