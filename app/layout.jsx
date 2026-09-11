import './globals.css'

export const metadata = {
  title: 'DevWeb MTL - Sites web pour petits business',
  description: 'Créer des sites web rapides et abordables pour ton business à Montréal',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" fill="%232563eb">w</text></svg>',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
