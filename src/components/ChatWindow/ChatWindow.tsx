import React, { ChangeEvent, FormEvent, useState } from 'react';
import TextBar from '../TextBar/TextBar';
import Message from '../Message/Message'

interface MessageObject {
    text: String
}

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<MessageObject[]>([])
    const [typing, setTyping] = useState<String>('')

    const onMessageChange = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTyping(e.target.value)
    }

    const onSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages([...messages, {text: typing}])
    }

    const renderMessages = () => {
        return messages.map((message, index) => {
            return <Message key={index} text={message.text} user='User' dateTime={new Date()} />
        })
    }

    return (
        <div className='flex flex-col h-full bg-slate-600 w-5/6 p-4 justify-between'>
            <div className='flex flex-col justify-end overflow-scroll h-full'>
                {renderMessages()}
            </div>
            <div className='justify-self-end'>
                <TextBar onMessageChange={onMessageChange} onSubmitMessage={onSubmitMessage} />
            </div>
        </div>
    )
}

export default ChatWindow