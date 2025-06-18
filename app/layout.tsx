// app/layout.tsx
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bless Caring Network | Nurse-Led Staffing & Home Care Agency',
  description: 'Premium Nurse-led Healthcare & Staffing',
  keywords: 'nursing agency, aged care staffing, home care support, nurse-led healthcare, Australia nursing jobs',
  openGraph: {
    title: 'Bless Caring Network | Nurse-Led Staffing & Home Care Agency',
    description: 'Bless Caring Network is Australia\'s trusted nurse-led staffing and care agency offering personalised support for hospitals, aged care, and home care.',
    url: 'https://blesscaring.com.au',
    siteName: 'Bless Caring Network',
    images: [
      {
        url: 'https://blesscaring.com.au/Bless-Caring-Network-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Bless Caring Network Logo',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bless Caring Network | Nurse-Led Staffing & Home Care Agency',
    description: 'Bless Caring Network is Australia\'s trusted nurse-led staffing and care agency offering personalised support for hospitals, aged care, and home care.',
    images: ['https://blesscaring.com.au/Bless-Caring-Network-logo.svg'],
  },
  icons: {
    icon: '/Bless-Caring-Network-logo-Favicon.svg',
    shortcut: '/Bless-Caring-Network-logo-Favicon.svg',
    apple: '/Bless-Caring-Network-logo-Favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" /> {/* ✅ Add this line */}
      </body>
    </html>
  );
}
