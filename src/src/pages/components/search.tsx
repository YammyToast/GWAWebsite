import React from 'react'

export default function SearchBar() {

    return (
        <div className="flex w-full h-full justify-center items-center">
            <input 
            className="flex md:w-full h-2/3 bg-background-alt shadow-inner rounded-xl border-transparent duration-200 ease-in-out hover:border-coral focus:border-coral border-2 pl-4 pr-4 items-center cursor-pointer outline-none text"
            placeholder='Search by: Title | Tags | Author'
            autoComplete='off'
            maxLength={255}
            />

        </div>
    )
}