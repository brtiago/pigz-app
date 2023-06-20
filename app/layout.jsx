import '@styles/globals.css';
import { Poppins } from 'next/font/google';
import Header from '@components/sections/header';

const poppins = Poppins({ 
    weight: ['400', '500', '600', '700'],
    subsets: ['latin']});

export const metadata = {
    title: 'Minha loja no Pigz - Mobile',
    description: 'Pigz Mobile APP',
    keywords: 'pigz, mobile, vendas online',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} sm:bg-slate-400 overflow-x-hidden lg:overflow-auto`}>
                <Header />
                {children}
                
            </body>
        </html>
    )
}