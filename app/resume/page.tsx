import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Resume() {
  return (
    <div className="custom-container h-[80vh]">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center m-2">
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>Unable to display PDF file, please try again later.</p>
        </object>
      </div>
      <Footer />
    </div>
  );
}
