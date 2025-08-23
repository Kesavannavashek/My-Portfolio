
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/Components/navbar'
import { ParticlesBackground } from '@/Components/ParticlesBackground'
import { Cherry_Cream_Soda } from 'next/font/google'
import { Inconsolata } from 'next/font/google'
import RoundCursor from '@/Components/Roundcursor'

const cherrycreamsoda = Cherry_Cream_Soda({
  weight : ['400'],
  subsets: ['latin'],
  variable :'--font-cherry-cream-soda'
})

const inconsolata = Inconsolata({
 weight:['200','300','400','500','600','700','800','900'],
 subsets :['latin'],
 variable : '--font-inconsolata'   
})
export const metadata: Metadata = {
  title: 'Kesavan M',
  description: 'Full Stack Developer Portfolio',
  icons:{
    icon:'./logo1.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cherrycreamsoda.variable} ${inconsolata.variable}`}>

      <body className='px-3 '>
        <ParticlesBackground/>
        <RoundCursor/>
        <header className='sticky top-0 lg:border-2  rounded-2xl lg:my-2 lg:backdrop-blur-sm z-50'>
            <Navbar/>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="p-4 bg-black text-white text-center z-50 mt-5">
            <div>
                <p>&copy; 2025 Kesavan. All rights reserved.</p>
            </div>
        </footer>

      </body>
    </html>
  )
}
