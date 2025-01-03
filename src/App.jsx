import { Outlet } from "react-router-dom";
import { Footer, Menu, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        {/* left */}
        <div className="w-[20%] sm:w-[16%] md:w-[16%]  lg:w-[15%]">
          <Menu />
        </div>
        {/* right */}
        <div className="w-[80%] sm:w-[84%] md:w-[84%] lg:w-[90%] bg-slate-300 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
