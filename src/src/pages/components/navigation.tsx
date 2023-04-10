import React from 'react'

import SearchBar from './search'




export default function Navigation() {
    
    return (
        <>
            <div className="flex md:w-screen shadow justify-center items-center border-b bg-background border-background-alt fixed z-10">
                <div className='md:w-9/12 md:h-20 grid grid-cols-navigation'>
                    <div className="flex text-coral font-bold justify-left items-center pl-8 text-xl cursor-pointer">MUSEcal</div>
                    <div className="flex w-2/5 font-bold items-center justify-center hover:bg-coral hover:text-background duration-200 pl-12 pr-12 cursor-pointer">Explore</div>
                    <div className="flex w-full">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="flex items-center justify-center">Icon</div>
                </div>
            </div>
            
            <div className="flex md:w-screen md:h-20"></div>
        </>

    )

}