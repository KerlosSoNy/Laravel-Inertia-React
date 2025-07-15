import Navbar from '@/components/common/navbar/navbar'
import React from 'react'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-screen flex flex-col overflow-hidden min-h-screen h-full bg-white dark:bg-black'>
            <Navbar />
            {children}
        </div>
    )
}
