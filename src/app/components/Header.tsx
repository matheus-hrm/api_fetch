import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className="bg-[rgb(3,0,26)] p-8">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="sm:text-2xl md:text-4xl font-semibold text-white">mangás</Link>
            <NavBar/>
        </div>
    </header>
  )
}

export default Header