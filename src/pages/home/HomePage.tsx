import { Target } from "lucide-react"


export const HomePage = () => {
  return (
     <main className="">
      <nav className="bg-mint py-4 px-10 flex items-center justify-between">
        <span className="font-bold flex items-center ">
          <div className="bg-gray-300 rounded-lg p-1">
          <Target className="size-6 " />
          </div>
          STACKSTEP</span>
          <button className="bg-black text-white px-3 py-1 rounded-md ml-4 cursor-pointer">Get Started</button>
      </nav>
      <section className="text-center mt-20 px-10 max-w-5xl mx-auto ">
        <h1 className="text-6xl font-bold mb-6  tracking-tight space-y-3 ">Make your learning measurable with <span className="text-yellow-600 px-1">StackStep</span></h1>
        <p className="text-lg mb-8">Organize, track, and accomplish your objectives seamlessly.</p>

      </section>
     </main>
  )
}
