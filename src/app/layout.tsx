import './globals.css'

export const metadata = {
  title: 'BMB Mode Center',
  description: 'By BMB Mode Center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
