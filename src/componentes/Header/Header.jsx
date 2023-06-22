import React from 'react'

function Header() {
  return (
    <header className="flex justify-between px-8 py-4 items-center  mb-10 sm:flex-row flex-col">

        <div className="logo flex">
            <span className="mr-2 font-medium cursor-pointer text-xl px-3 py-1 bg-black text-white hover:text-red-500">B</span>
            <span className="mr-2 font-medium cursor-pointer text-xl px-3 py-1 bg-black text-white hover:text-red-500">B</span>
            <span className="mr-2 font-medium cursor-pointer text-xl px-3 py-1 bg-black text-white hover:text-red-500">C</span>
        </div>

        <div className="search-bar flex border rounded-lg  ">
            <input type="text" placeholder='Buscar noticias...' 
            className="outline-none p-2 pr-20 flex-grow bg-transparent text-white"
        />
            <a href="" className="flex items-center justify-center px-3 ">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </a>
        </div>
        
    </header>
  )
}

export default Header