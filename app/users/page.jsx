import React from 'react'
import Aside from '@/components/aside'

export default function Users() {
    return (
        <div className='flex justify-between'>
            <Aside />

            <div class="relative overflow-x-auto shadow-md w-full">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Full name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Role
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                name
                            </th>
                            <td class="px-6 py-4">
                                email
                            </td>
                            <td class="px-6 py-4">
                                phone
                            </td>
                            <td class="px-6 py-4">
                                role
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
