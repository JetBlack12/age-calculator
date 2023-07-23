import './globals.css'
export const metadata = {
  title: 'Age Calculator',
  description: 'By Crow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  )
}
