import { Navbar } from "./components/Navbar";
import { MainCard } from "./components/MainCard";
import { Footer } from "./components/Footer";
import { ThreeBackground } from "./components/ThreeBackground";

export default function Home() {
  return (
    <>
      <div className="fixed z-[-1] w-full h-full">
        <ThreeBackground />
      </div>
      <main className="custom-container">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full min-h-full">
          <MainCard />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}
