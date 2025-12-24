import './globals.css'

export const metadata = {
  title: 'My portfolio',
  description: 'A summary of my EMBA work',
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