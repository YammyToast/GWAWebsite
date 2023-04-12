import React from 'react'
import Image from 'next/image'

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
                    <div className="flex items-center justify-center">
                        <div className="flex cursor-pointer h-full w-fit hover:bg-accent-1 pl-8 pr-8">
                            <Image src="/img/plus.svg" alt="New Post" width="20" height="20"></Image>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex md:w-screen md:h-20"></div>
        </>

    )

}