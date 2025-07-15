import DarkModeToggle from '@/components/darkButton'
import LanguageSwitcher from '@/components/languageDropdown'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex flex-row justify-between'>
            <span>Logo Of the Site</span>
            <div className='flex flex-row gap-[20px]'>
                <LanguageSwitcher />
                <DarkModeToggle />
            </div>
        </div>
    )
}
