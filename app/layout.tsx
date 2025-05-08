import Navbar from '@/components/layout/Navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'DigitalHippo',
	description: 'A digital assets marketplace for all',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='w-full'>
			<body
				className={cn(
					'relative h-full font-sans antialiased',
					inter.className,
				)}>
				<main className='relative flex flex-col min-h-screen'>
					<Navbar />
					<div className='flex-grow flex-1'>{children}</div>
				</main>
			</body>
		</html>
	);
}
