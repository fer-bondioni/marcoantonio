'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, Volume2 } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">AUDIO LEAKS</span>
              <span className="text-xs text-red-200">Confidential Audio Archive</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-red-200 transition-colors">
              Home
            </Link>
            <Link href="/topics" className="hover:text-red-200 transition-colors">
              Topics
            </Link>
            <Link href="/about" className="hover:text-red-200 transition-colors">
              About
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-red-200 transition-colors">
                Home
              </Link>
              <Link href="/topics" className="hover:text-red-200 transition-colors">
                Topics
              </Link>
              <Link href="/about" className="hover:text-red-200 transition-colors">
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
