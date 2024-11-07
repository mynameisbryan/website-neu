import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p>&copy; {new Date().getFullYear()} Tüscher Systeme. All rights reserved.</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Produkte</Link></li>
              <li><Link href="/updates">News</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
            </ul>
          </div>
          <div className="flex justify-end">
            <Image 
              src="/images/neher_logo_tr.png" 
              alt="Neher Logo" 
              width={100} 
              height={100}
              className="footer-image"
              priority={false}
            />
          </div>
        </div>
      </div>
    </footer>
  )
} 