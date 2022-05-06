import React from 'react';

interface Props {
    user: String,
    dateTime: Date,
    text: String
}

function Message({ user = 'User', dateTime = new Date(), text = ''}: Props) {
    return (
        <div className='flex flex-row mb-4'>
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-red-500 mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path color="#fff" strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div>
                <p className='font-bold text-sm text-white'>{user} <span className='inline-block ml-1 text-xs text-slate-300 font-normal'>{dateTime.toLocaleString()}</span></p>
                <p className='text-white text-sm'>{text}</p>
            </div>
        </div>
    )
}

export default Message