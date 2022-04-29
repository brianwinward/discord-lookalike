function CurrentServerRail() {
    return (
        <div className="bg-slate-700 flex flex-col w-1/6">
            <nav className='flex shadow-sm shadow-black p-2 pl-4 justify-between h-12'>
                <a href="#" className='text-white font-semibold text-lg hover:text-slate-300 transition-all'>Server</a>
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 mt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path color="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </nav>
            <div className='pt-4 px-2'>
                <ul>
                    <li className='px-2 mb-4'>
                        <a href="#" className='text-sm text-white flex items-center font-semibold hover:text-slate-300 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path color="#94a3b8" stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                            Rules
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='px-2 mb-4'>
                        <a href="#" className='text-sm text-white flex items-center font-semibold uppercase hover:text-slate-300 transition-all'>Text Channels</a>
                        <ul>
                            <li className='my-2'>
                                <a href="#" className='text-sm text-white flex items-center font-semibold hover:text-slate-300 transition-all'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path color="#94a3b8" stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                    announcements
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className='text-sm text-white flex items-center font-semibold hover:text-slate-300 transition-all'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path color="#94a3b8" stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                    </svg>
                                    general
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className='text-sm text-white flex items-center font-semibold hover:text-slate-300 transition-all'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path color="#94a3b8" stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                    </svg>
                                    random
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default CurrentServerRail