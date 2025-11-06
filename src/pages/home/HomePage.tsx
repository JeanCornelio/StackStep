import { Github } from "lucide-react";
import SvgTrophy, { SvgCloud } from "../../components/shared/svg";
import { LogoComponent } from "../../components/ui";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-mint py-4 px-10 flex items-center justify-between">
        <LogoComponent />
        <button className="bg-black text-white px-3 py-1 rounded-md ml-4 cursor-pointer">
          Get Started
        </button>
      </nav>

      <main>
        {/* Hero section */}
        <section className=" mt-16  relative">
          <div className="max-w-5xl  mx-auto text-center ">
            <h1 className="text-6xl font-bold mb-6  tracking-tight space-y-3">
              Make your learning measurable with{" "}
              <span className="text-yellow-600 px-1">StackStep</span>
            </h1>
            <p className="text-lg ">
              Organize, track, and accomplish your objectives seamlessly.
            </p>

            <div className="mask-b-from-20% mask-b-to-75%  mt-20 ">
              <SvgTrophy with="100%" height="auto" />
            
            </div>
            
          </div>
          <div className="absolute bottom-0   w-full  flex justify-center">
              <SvgCloud />
            </div>
          {/* <div className="bg-white w-90 h-40 rounded-lg shadow absolute top-20">
            <h2>Imagen del sistema</h2>
          </div>
           <div className="bg-white w-90 h-40 rounded-lg shadow absolute top-40 right-10">
            <h2>Imagen del sistema</h2>
          </div> */}
        </section>
      </main>

      <footer className="bg-black h-14 px-10 flex items-center mt-auto">
        <LogoComponent mode="dark" />
        <h5 className="text-white ms-auto me-3">By Jean Cornelio with ❤️ </h5>
        <Link to={'https://github.com/JeanCornelio'} target="_blank">
       
        <Github className="text-white"/>
        </Link>
      </footer>
    </div>
  );
};
