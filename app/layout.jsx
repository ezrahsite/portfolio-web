import './globals.css'

export const metadata = {
  title: '<Ezrah site>
  <rect width="400" height="400" fill="none"/>
  
  <!-- Main logo group -->
  <g id="logo-main">
    
    <!-- Robotic hand structure -->
    <g id="robot-hand">
      
      <!-- Wrist/Forearm - metallic look -->
      <rect x="175" y="260" width="50" height="40" rx="8" fill="none" stroke="#FF8C42" stroke-width="6"/>
      <line x1="175" y1="275" x2="225" y2="275" stroke="#FF8C42" stroke-width="3" opacity="0.5"/>
      <line x1="175" y1="290" x2="225" y2="290" stroke="#FF8C42" stroke-width="3" opacity="0.5"/>
      
      <!-- Palm base - geometric -->
      <rect x="165" y="230" width="70" height="35" rx="6" fill="none" stroke="#FF8C42" stroke-width="5"/>
      <line x1="185" y1="230" x2="185" y2="265" stroke="#FF8C42" stroke-width="2" opacity="0.4"/>
      <line x1="205" y1="230" x2="205" y2="265" stroke="#FF8C42" stroke-width="2" opacity="0.4"/>
      
      <!-- THUMB - robotic segments -->
      <g id="thumb">
        <rect x="145" y="210" width="18" height="22" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="145" y1="221" x2="163" y2="221" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="138" y="180" width="16" height="20" rx="3" fill="none" stroke="#FF8C42" stroke-width="4"/>
        <line x1="138" y1="190" x2="154" y2="190" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <circle cx="132" cy="160" r="6" fill="none" stroke="#FF8C42" stroke-width="4"/>
      </g>
      
      <!-- INDEX FINGER - tall & strong -->
      <g id="index">
        <rect x="175" y="185" width="16" height="25" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="175" y1="198" x2="191" y2="198" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="172" y="150" width="16" height="25" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="172" y1="163" x2="188" y2="163" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="170" y="110" width="14" height="25" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="170" y1="122" x2="184" y2="122" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <circle cx="177" cy="85" r="7" fill="none" stroke="#FF8C42" stroke-width="4"/>
      </g>
      
      <!-- MIDDLE FINGER - tallest -->
      <g id="middle">
        <rect x="198" y="180" width="16" height="30" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="198" y1="195" x2="214" y2="195" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="196" y="135" width="16" height="30" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="196" y1="150" x2="212" y2="150" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="194" y="85" width="14" height="35" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="194" y1="102" x2="208" y2="102" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <circle cx="201" cy="55" r="8" fill="none" stroke="#FF8C42" stroke-width="4"/>
      </g>
      
      <!-- RING FINGER -->
      <g id="ring">
        <rect x="221" y="185" width="16" height="25" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="221" y1="198" x2="237" y2="198" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="219" y="150" width="16" height="25" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="219" y1="163" x2="235" y2="163" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="217" y="110" width="14" height="25" rx="4" fill="none" stroke="#FF8C42" stroke-width="5"/>
        <line x1="217" y1="122" x2="231" y2="122" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <circle cx="224" cy="85" r="7" fill="none" stroke="#FF8C42" stroke-width="4"/>
      </g>
      
      <!-- PINKY FINGER -->
      <g id="pinky">
        <rect x="243" y="210" width="16" height="20" rx="3" fill="none" stroke="#FF8C42" stroke-width="4"/>
        <line x1="243" y1="220" x2="259" y2="220" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <rect x="242" y="175" width="14" height="20" rx="3" fill="none" stroke="#FF8C42" stroke-width="4"/>
        <line x1="242" y1="185" x2="256" y2="185" stroke="#FF8C42" stroke-width="2" opacity="0.5"/>
        <circle cx="255" cy="155" r="6" fill="none" stroke="#FF8C42" stroke-width="4"/>
      </g>
    </g>
    
    <!-- Website/Code being lifted by hand -->
    <g id="website">
      <!-- Browser window -->
      <rect x="110" y="80" width="180" height="120" rx="14" fill="none" stroke="#FF8C42" stroke-width="6" stroke-linejoin="round"/>
      
      <!-- Browser header bar -->
      <rect x="110" y="80" width="180" height="28" rx="14" fill="#FF8C42" opacity="0.12"/>
      
      <!-- URL bar -->
      <rect x="125" y="92" width="150" height="8" rx="4" fill="none" stroke="#FF8C42" stroke-width="2" opacity="0.6"/>
      
      <!-- Content lines (code/website) -->
      <g opacity="0.75" stroke="#FF8C42" stroke-width="3" stroke-linecap="round">
        <line x1="130" y1="120" x2="260" y2="120"/>
        <line x1="130" y1="140" x2="250" y2="140"/>
        <line x1="130" y1="160" x2="255" y2="160"/>
        <line x1="130" y1="180" x2="240" y2="180"/>
      </g>
      
      <!-- Corner accent dots -->
      <circle cx="125" cy="100" r="3" fill="#FF8C42" opacity="0.6"/>
      <circle cx="275" cy="100" r="3" fill="#FF8C42" opacity="0.6"/>
    </g>
    
    <!-- Tech dots - connection/network -->
    <circle cx="90" cy="140" r="3" fill="#FF8C42" opacity="0.4"/>
    <circle cx="310" cy="160" r="3" fill="#FF8C42" opacity="0.4"/>
    <circle cx="320" cy="220" r="2" fill="#FF8C42" opacity="0.3"/>
  </g>
  
  <!-- Text: Brand name -->
  <text x="200" y="345" font-size="38" font-weight="bold" fill="#FF8C42" text-anchor="middle" font-family="Arial, sans-serif">EZRAH</text>
  
  <!-- Tagline -->
  <text x="200" y="378" font-size="12" fill="#FF8C42" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="2" opacity="0.75">WEB DEVELOPMENT</text>
</svg> - Sites web pour petits business',
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
