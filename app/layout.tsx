import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gaurav Yadav | First-Year Cybersecurity Student & Builder',
  description:
    'Legendary portfolio of Gaurav Yadav. SIH 2025 Qualifier. Full-stack developer shipping production apps weekly. Building Zocav digital agency.',
  authors: [{ name: 'Gaurav Yadav', url: 'https://archduke.is-a.dev' }],
  openGraph: {
    title: 'Gaurav Yadav | Builder & Founder',
    description: 'First-year student. Already SIH-qualified. Already freelancing. Already building startup.',
    url: 'https://archduke.is-a.dev',
    siteName: 'Gaurav Yadav Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Yadav | First-Year Developer',
    description: 'SIH 2025 External Qualifier. Full-stack developer. Building Zocav.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <div className="relative min-h-screen">
          {/* Animated background gradient */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/10 rounded-full blur-3xl opacity-20 animate-pulse" />
          </div>

          {/* Main content */}
          {children}
        </div>
      </body>
    </html>
  );
}
