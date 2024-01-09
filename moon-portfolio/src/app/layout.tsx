import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import Footer from './Footer'
import './styles/globals.css'

const inter = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Moon's Profile",
  description: 'Porfolio made by Moon',
  icons: {
    icon:
      {
        url: './chonky-moon-no-background.png',
        href: './chonky-moon-no-background.png'
      }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    //   <Footer/>
    // </html>
    <>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </>
  )
}
