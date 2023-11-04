import { Inter } from 'next/font/google'
import './styles/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Advice Generator App - Frontend Mentor',
  description: 'Professional grade front-end coding challenge.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
