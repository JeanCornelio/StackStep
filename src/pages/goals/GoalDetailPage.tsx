import { SvgGitHub } from "@/components/shared/svg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Hourglass, Undo } from "lucide-react";
import { Link } from "react-router-dom";

export const GoalDetailPage = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="flex  justify-between">
        <div className="">
          <span className="text-3xl font-semibold">Learn about nestJS</span>
          <p className="text-sm text-gray-400">
            Dominar los conceptos básicos y crear una API con NestJS
          </p>
          <div className="">
            <Progress value={80} className="mt-3" />
            <h2 className="text-xs text-gray-400">80%</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to="/goals">
            <Button>
              <Undo />
            </Button>
          </Link>
          <Button>
            <Hourglass /> Update
          </Button>
        </div>
      </div>
      <Alert>
        <SvgGitHub />
        <AlertTitle>Conect your proyect wit Github!</AlertTitle>
        <AlertDescription>
          title about conect this goal with GitHub.
        </AlertDescription>
        <div>
          <Button>Conect here!</Button>
        </div>
      </Alert>

      <div className="bg-white rounded-xl border p-4">
        <h2 className="font-semibold mb-4">Commits</h2>

        <div className="bg-white ">
          <h4 className="text-sm">21/9/2025 - Adding header</h4>
          <h4 className="text-sm">21/9/2025 - Adding header</h4>
          <h4 className="text-sm">21/9/2025 - Adding header</h4>
        </div>
      </div>
      <div className="bg-white rounded-xl border p-4">
        <h2 className="font-semibold mb-4">History</h2>

        <div className="bg-white ">
          <h4 className="text-sm">21/9/2025 - 3 hours</h4>
          <h4 className="text-sm">21/9/2025 - 3 hours</h4>
          <h4 className="text-sm">21/9/2025 - 3 hours</h4>
          <h4 className="text-sm">21/9/2025 - 3 hours</h4>
        </div>
      </div>
    </section>
  );
};
