import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider/ThemeProvider'

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
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
