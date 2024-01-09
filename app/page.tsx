import Image from "next/image";
// import Head from "next/head";
import { Navbar } from "./components/Navbar";
import { MainCard } from "./components/MainCard";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Yun&apos;s Portfolio</title>
        <link rel="icon" href="/rock.ico" />
      </Head> */}
      <main className="custom-container">
        <div className="flex flex-col w-full items-center justify-between font-mono">
          <Navbar />
          <MainCard />
        </div>
        <Footer />
      </main>
    </div>
  );
}
