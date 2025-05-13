import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CCIE Hall of Fame Turkiye',
  description: 'CCIE Hall of Fame Turkiye',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
