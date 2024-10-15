import React from 'react'
import Aside from '@/components/aside'

export default function Users() {
    return (
        <div className='flex justify-center'>
            <Aside />
            <table className=' w-9/12'>
                <thead className='flex justify-center items-center border border-solid border-indigo-700'>
                    <tr className='table-cell p-3'>
                        <th className=''>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                    </tr>
                </thead>

                <tbody className='flex justify-evenly items-center'>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>role</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
