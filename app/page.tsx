import Image from 'next/image'
import { Navbar } from './components/Navbar';
import { MainCard } from './components/MainCard';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="custom-container">
      <div className="flex flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="bg-blue-900 w-full">{'>'} Hello World!!!</p>
        <Navbar />
        <MainCard />
      </div>
      <Footer />
    </main>
  )
}
