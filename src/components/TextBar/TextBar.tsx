import React, { ChangeEventHandler, FormEventHandler } from 'react';

interface Props {
    onMessageChange: ChangeEventHandler,
    onSubmitMessage: FormEventHandler
}

function TextBar({ onMessageChange, onSubmitMessage }:Props) {
    return (
        <div className='rounded-lg bg-slate-500 py-2 px-4 flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center'>
                <a href="#" className='inline-block mr-2 text-slate-300 hover:text-white transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
                <form onSubmit={onSubmitMessage}>
                    <input onChange={onMessageChange} placeholder='Message #general' className='bg-transparent text-white placeholder:text-slate-300 px-2 py-1 rounded-lg focus:outline-slate-300 outline-offset-0 text-sm' type='text' />
                </form>
            </div>
            <div>
                <ul className='flex flex-row items-center'>
                    <li className='mr-2 flex items-center'>
                        <a href="#" className='text-slate-300 hover:text-white transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </a>
                    </li>
                    <li className='mr-2 flex items-center'>
                        <a href="#" className='text-slate-300 hover:text-white transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                        </a>
                    </li>
                    <li className='mr-2 flex items-center'>
                        <a href="#" className='text-slate-300 hover:text-white transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </li>
                    <li className='flex items-center'>
                        <a href="#" className='text-slate-300 hover:text-white transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TextBar;