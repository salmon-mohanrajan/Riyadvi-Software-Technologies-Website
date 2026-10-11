import { Inter, Poppins } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Riyadvi Software Technologies | Digital Transformation & 3D Web Solutions',
  description:
    'Custom software development, interactive 3D web experiences, mobile applications, and AI-powered business solutions. Your digital technology partner since 2021.',
  keywords: [
    'Riyadvi Software Technologies',
    'Custom Software',
    '3D Web Development',
    'React Three Fiber',
    'Digital Transformation',
    'UI/UX Design',
    'AR VR Development',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col bg-[#050608] text-gray-100 font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
