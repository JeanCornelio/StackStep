import { Target } from "lucide-react";

interface logoProps {
  mode?: string;
}

export const LogoComponent = ({ mode = "white" }: logoProps) => {
  console.log(mode);
  const whiteMode = "bg-gray-300";
  const darkMode = "bg-white";
  return (
    <span className="font-bold flex items-center gap-2 ">
      <div
        className={
          (mode === "white" ? whiteMode : darkMode) + " rounded-lg p-0.5"
        }
      >
        <Target className="size-6 " />
      </div>
      <span className={mode !== "white" ? "text-white" : "text-black"}>
        STACKSTEP
      </span>
    </span>
  );
};
