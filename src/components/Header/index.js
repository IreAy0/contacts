import React from 'react'
import {Link, useLocation} from 'react-router-dom'


const Header = () => {
    const {pathname} = useLocation();


    return (
        <div>

 
  <div class="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
    <Link to="/" class=" text-sm md:text-lg text-gray-700  md:flex">
	<svg viewBox="0 0 24 24" className="h-10">
  <defs/>
  <g data-name="Layer 2">
    <path d="M4 7v2H3a1 1 0 010-2zM4 15v2H3a1 1 0 010-2zM17 2H7a3 3 0 00-3 3v2h1a1 1 0 010 2H4v6h1a1 1 0 010 2H4v2a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm-5 4a3 3 0 11-3 3 3 3 0 013-3zm3 12a1 1 0 01-1-1 1 1 0 00-1-1h-2a1 1 0 00-1 1 1 1 0 01-2 0 3 3 0 013-3h2a3 3 0 013 3 1 1 0 01-1 1z"/>
    <circle cx="12" cy="9" r="1"/>
  </g>
</svg>
	</Link>
    <div class="w-full md:w-4/6 h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
  <input type="search" name="search" id="search" placeholder="Search"
         class="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
  <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </button>
</div>
<div class="flex md:hidden">
{pathname === '/' && (<Link to="/contacts/create" class="hover:bg-blue-700 rounded-full h-10 w-10 justify-center hover:text-white transition-all duration-150 ease-in-outtext-center flex items-center border border-blue-800 text-blue-700 bg-white px-2 py-1 md:px-4 md:py-2 m-2">
			<span className="inline-flex">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
			</span>
		</Link>)}
		{pathname === '/' && (<Link to="" class="hover:bg-red-600 h-10 w-10 rounded-full justify-center hover:text-white transition-all duration-150 ease-in-outtext-center flex items-center border border-red-800 text-red-700 bg-white px-2 py-1 md:px-4 md:py-2 m-2">
			<span className="inline-flex">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6"fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
			</span>
		</Link>)}
      </div>
      <div class="md:flex hidden">
       {pathname === '/' &&  ( <Link to="/contacts/create" class="hover:bg-blue-700 rounded hover:text-white transition-all duration-150 ease-in-outtext-center flex items-center border border-blue-800 text-blue-700 bg-white px-2 py-1 md:px-4 md:py-2 m-2">
			<span className="inline-flex">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
			</span>
			Create Contact</Link>)}
			{pathname === '/' && (<Link to ="" class="hover:bg-red-600 rounded hover:text-white transition-all duration-150 ease-in-outtext-center flex items-center border border-red-800 text-red-700 bg-white px-2 py-1 md:px-4 md:py-2 m-2">
			<span className="inline-flex">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
			</span>
		Logout</Link>)}
      </div>
  </div>
 
 
 
  </div>
    )
}

export default Header
