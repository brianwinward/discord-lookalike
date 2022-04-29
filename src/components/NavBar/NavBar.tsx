function NavBar() {
    return (
        <div className='bg-slate-600 relative'>
            <nav className='flex flex-row shadow-sm shadow-black p-2 pl-4 h-12 items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <a href="#" className='text-white flex items-center font-semibold hover:text-slate-300 transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path color="#94a3b8" stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                        general
                    </a>
                    <span className="inline-block text-slate-300 mx-2">|</span>
                    <span className="inline-block text-slate-300 mr-2 text-xs font-semibold">This is the default text channel for the server</span>
                </div>
                
                <div className='flex flex-row items-center'>
                    <ul className='flex flex-row justify-self-end'>
                        <li className='mr-2 flex items-center'>
                            <a className='text-slate-300 hover:text-white transition-all' href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </a>
                        </li>
                        <li className='mr-2 flex items-center'>
                            <a className='text-slate-300 hover:text-white transition-all' href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </a>
                        </li>
                        <li className='mr-2 flex items-center'>
                            <a className='text-slate-300 hover:text-white transition-all' href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </a>
                        </li>
                        <li className='mr-2 flex items-center'>
                            <a className='text-slate-300 hover:text-white transition-all' href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </a>
                        </li>
                        <li className='mr-2 flex items-center'>
                            <input className='bg-slate-900 text-white placeholder:text-slate-300 px-2 py-1 rounded-lg focus:outline-slate-300 outline-offset-0 text-sm' type='search' placeholder='Search' />
                        </li>
                        <li className='mr-2 flex items-center'>
                            <a className='text-slate-300 hover:text-white transition-all' href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                            </a>
                        </li>
                        <li className='mr-2 flex items-center'>
                            <a className='text-slate-300 hover:text-white transition-all' href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;