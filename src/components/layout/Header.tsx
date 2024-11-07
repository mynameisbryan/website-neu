'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-padding flex items-center justify-between h-header">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Tüscher Systeme Logo"
            width={160}
            height={55}
            className="max-h-[55px] w-auto"
            priority
            onError={(e) => {
              console.error('Error loading logo image');
              e.currentTarget.src = '/images/fallback-logo.jpg';
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="nav-link">Produkte</Link>
          <Link href="/services" className="nav-link">Dienstleistungen</Link>
          <Link href="/contact" className="nav-link">Kontakt</Link>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          {/* Add your menu icon here */}
        </button>
      </div>
    </header>
  )
}