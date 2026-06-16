import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '競馬予想ツール | Keiba Tool',
  description: '期待値ベースの競馬予想分析ツール',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <h1 className="text-2xl font-bold text-blue-600">
                競馬予想 Tool v0.1
              </h1>
            </nav>
          </header>
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
              <p>期待値で長期に勝つ。</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
