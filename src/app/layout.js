import './styles/styles.scss'

export const metadata = {
  title: 'Advice Generator App - Frontend Mentor',
  description: 'Professional grade front-end coding challenge.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
