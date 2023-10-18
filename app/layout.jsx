import './globals.css'

export const metadata = {
  title: 'Save Your Money',
  description: 'How to Save Your Money',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className=' h-screen m-0'>{children}</body>
    </html>
  )
}
