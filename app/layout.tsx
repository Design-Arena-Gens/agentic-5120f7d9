import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apache ECharts Comprehensive Demo',
  description: 'Complete showcase of all Apache ECharts features and chart types',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
