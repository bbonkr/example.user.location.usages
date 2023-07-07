import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Where am I',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed z-10 top-0 left-0 right-0 px-6 py-3 flex flex-row items-center justify-between bg-slate-700 text-slate-100">
          <h1 className="text-lg font-bold">{`${metadata.title}`}</h1>
          <div>
            <a
              className="text-lg"
              href="https://github.com/bbonkr/example.user.location.usages"
              title="GitHub: bbonkr/example.user.location.usages"
            >
              <FaGithub />
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
