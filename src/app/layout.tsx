import './styles/globals.css'; 
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Marcel Brard Portfolio',
  description: 'Portfolio of Marcel Brard, IT Engineer and Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '10px', background: '#343a40', color: '#fff' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link href="/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
