import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { MessageType } from 'shared/types/messages';


interface MessageProps {
    message: MessageType
}


function MessageComponent({message} : MessageProps) {
    const isUserMessage = message.type === "user"


    // one one one one 111111111
    
    return (
        <Box 
            sx={(t) => ({
                bgcolor: t.palette.background.lightGray, // some comments
                width: isUserMessage ? "40%" : "60%", 
                boxSizing: "border-box", 
                alignSelf: isUserMessage ? "flex-end" : "center", 
                whiteSpace: "pre-wrap", 
                wordBreak: "break-word", 
                borderRadius: 4,
                p: 2, 
                mx: "2%",
                my: 2
            })}
        >
            <Typography color="textPrimary">{message.text}</Typography>
        </Box>
    )
}


export const Message = memo(MessageComponent) 
