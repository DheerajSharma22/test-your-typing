import React from 'react'
import useCustomHook from '../../Hooks/useCustomHook';

const RestartIcon = () => {
    const {restartTest} = useCustomHook();

    return (
        <div className="w-full flex text-center items-center justify-center mt-24">
            <button className='cursor-pointer' onClick={restartTest}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl lg:text-3xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zM6 13c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 004 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"></path></svg>
            </button>
        </div>
    )
}

export default RestartIcon