import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider/ThemeProvider'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Página',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
