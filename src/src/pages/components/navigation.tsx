import React from 'react'

import SearchBar from './search'

export default function Navigation() {
    
    return (
        <div className="flex shadow justify-center items-center">
            <div className='md:w-9/12 md:h-20 grid grid-flow-col'>
                <div className="flex text-coral font-bold justify-left items-center pl-8 text-xl cursor-pointer">MUSEcal</div>
                <div className="flex w-2/5 items-center justify-center">Explore</div>
                <div className="flex w-96">
                    <SearchBar></SearchBar>
                </div>
                <div>3</div>
            </div>
        </div>

    )

}