import TextBar from '../TextBar/TextBar';
import Message from '../Message/Message'

function ChatWindow() {
    return (
        <div className='flex flex-col h-full bg-slate-600 w-5/6 p-4 justify-between'>
            <div className='flex flex-col justify-end overflow-scroll h-full'>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className='justify-self-end'>
                <TextBar />
            </div>
        </div>
    )
}

export default ChatWindow