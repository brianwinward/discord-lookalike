import React, { ChangeEvent, FormEvent, useState } from 'react';
import TextBar from '../TextBar/TextBar';
import Message from '../Message/Message'

interface MessageObject {
    text: String,
    date: Date
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
        setMessages([...messages, {text: typing, date: new Date()}])
    }

    const renderMessages = () => {
        return messages.map(({text, date}, index) => {
            return <Message key={index} text={text} user='User' dateTime={date} />
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