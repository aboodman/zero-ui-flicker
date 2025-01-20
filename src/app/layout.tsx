'use client';

import './globals.css';
import Link from 'next/link';
import ZeroRootProvider from '@/components/providers/zero-provider';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className="antialiased bg-gray-900 text-gray-100 min-h-screen">
				<ZeroRootProvider>
					<div className="flex h-screen">
						{/* Sidebar */}
						<nav className="w-24 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4">
							<Link
								href="/"
								className="p-3 rounded-lg hover:bg-gray-700 mb-2 transition-colors"
								title="Home"
							>
								Home
							</Link>
							<Link
								href="/todos1"
								className="p-3 rounded-lg hover:bg-gray-700 transition-colors"
								title="Todos"
							>
								Todos 1
							</Link>
							<Link
								href="/todos2"
								className="p-3 rounded-lg hover:bg-gray-700 transition-colors"
								title="Todos"
							>
								Todos 2
							</Link>
						</nav>

						{/* Main Content */}
						<main className="flex-1 overflow-auto">{children}</main>
					</div>
				</ZeroRootProvider>
			</body>
		</html>
	);
}
