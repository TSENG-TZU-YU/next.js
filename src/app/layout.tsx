import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <nav className="bg-[#333] text-white p-[1rem]">
                    <ul className="flex justify-start ps-5 list-none gap-3">
                        <li>
                            <Link href="/animation">Home</Link>
                        </li>
                        <li>
                            <Link href="/book">AllBooks</Link>
                        </li>
                    </ul>
                </nav> */}
                <div className="flex">
                    {/* <Sidebar collapsed={true} /> */}
                    <div className=" w-[100%]">
                        <div className={inter.className}>{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
