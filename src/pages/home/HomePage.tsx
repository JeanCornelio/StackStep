import { Github } from "lucide-react";

import { LogoComponent } from "../../components/ui";
import { Link, NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-mint py-4 px-10 flex items-center justify-between">
        <LogoComponent />
        <NavLink to={"/login"}>
          <button className="bg-black text-white px-3 py-1 rounded-md ml-4 cursor-pointer">
            Get Started
          </button>
        </NavLink>
      </nav>
      <main>
        {/* Hero section */}
        <section className=" mt-16">
          <div className="max-w-5xl  mx-auto text-center animate-fade-in ">
            <h1 className="text-6xl font-bold mb-6  tracking-tight space-y-3 ">
              Make your learning measurable with{" "}
              <span className="text-yellow-600 px-1">StackStep</span>
            </h1>
            <p className="text-lg ">
              Plan, track, and visualize your progress as you build real skills.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-black h-14 px-10 flex items-center mt-auto">
        <LogoComponent mode="dark" />
        <h5 className="text-white ms-auto me-3">By Jean Cornelio with ❤️ </h5>
        <Link to={"https://github.com/JeanCornelio"} target="_blank">
          <Github className="text-white" />
        </Link>
      </footer>
    </div>
  );
};
