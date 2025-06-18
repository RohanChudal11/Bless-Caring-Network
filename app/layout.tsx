// app/layout.tsx
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bless Caring',
  description: 'Premium Nurse-led Healthcare & Staffing',
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
