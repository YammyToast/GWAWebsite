import React from 'react'

import IndexHero from './indexHero'
import IndexScroller from './indexScroller'

export default function IndexContent() {
    return (
        <>
            <div className="flex md:h-fit md:w-full items-center justify-center z-0">
                <div className="flex md:w-9/12 md:h-fit flex-col">
                    <IndexHero></IndexHero>   
                    <IndexScroller></IndexScroller> 
                </div>
            </div>
        </>

    )
}