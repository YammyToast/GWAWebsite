import Image from 'next/image'

import React from 'react'

export default function SearchBar() {

    return (
        <div className="flex w-full h-full justify-center items-center relative">
            <Image src="/img/search.svg" alt="Search" width="20" height="20" className="absolute left-4"></Image>
            <input 
            className="flex md:w-full h-2/3 bg-background-alt shadow-inner rounded-xl border-transparent duration-200 ease-in-out hover:border-coral focus:border-coral border-2 pl-12 pr-4 items-center outline-none text placeholder:text-accent-2"
            placeholder='Search by: Title | Tags | Author'
            autoComplete='off'
            spellCheck="false"
            maxLength={255}
            />

        </div>
    )
}