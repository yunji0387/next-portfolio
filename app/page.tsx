import Image from 'next/image'
import { Navbar } from './components/Navbar';
import { MainCard } from './components/MainCard';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-10 text-sm">
      <div className="flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="bg-blue-900 w-full">{'>'} Hello World!!!</p>
        <Navbar />
        <MainCard />
        
      </div>
      <Footer />
    </main>
  )
}
