import { Navbar } from "./components/Navbar";
import { MainCard } from "./components/MainCard";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
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
