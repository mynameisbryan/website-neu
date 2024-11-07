import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Tüscher Systeme',
  description: 'Ihr Partner für innovative Systemlösungen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${roboto.variable}`}>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
