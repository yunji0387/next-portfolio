import { Navbar } from "./components/Navbar";
import { MainCard } from "./components/MainCard";
import { Footer } from "./components/Footer";
import { ThreeBackground } from "./components/ThreeBackground";

export default function Home() {
  return (
    <>
      <div className="fixed z-[-1]">
        <ThreeBackground />
      </div>
      <main className="custom-container">
        {/* <div className="flex flex-col w-full h-full items-center justify-between font-mono"> */}
          <Navbar />
          <MainCard />
          <Footer />
        {/* </div> */}
      </main>
    </>
  );
}
