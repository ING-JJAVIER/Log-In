import React from 'react'
import Aside from '@/components/aside'

export default function Dashboard() {
    return (
        <div className='flex'>
            <Aside />
            <div className='text-center p-3 font-serif'>

                <h1 className='text-3xl font-semibold m-3 underline decoration-text '>Welcome</h1>
                <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat delectus eius maiores voluptas perferendis culpa quos, labore placeat ratione odio explicabo tenetur, est excepturi fugiat.</p>
            </div>
        </div>
    )
}
