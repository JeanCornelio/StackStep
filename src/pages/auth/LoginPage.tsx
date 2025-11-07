import { Button } from "@/components/ui/button";
import { LogoComponent } from "../../components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomInput } from "@/components/custom/CustomInput";
import { SvgGitHub, SvgGoogle } from "@/components/shared/svg";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <article className="flex items-center justify-center h-screen">
      <div className=" p-6 rounded-2xl w-90 h-90 border shadow  bg-white ">
        <div className="mb-5 flex justify-center w-full">
          <LogoComponent />
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <CustomInput
            name="email"
            placeholder="Email"
            control={form.control}
            type="email"
          />
          <CustomInput
            name="password"
            placeholder="Password"
            control={form.control}
            type="password"
          />

          <Button className="w-full">Sign in</Button>
          <div className="grid grid-col-1 md:grid-cols-2  gap-2 ">
            <Button variant="outline">
              <SvgGitHub /> GitHub
            </Button>
            <Button>
              <SvgGoogle />
              Google
            </Button>
          </div>
          <div className="text-xs text-center mt-4">
            <span>Don't have an account ?</span>
            <Link className="font-bold ms-1" to="/register">
              Sing up
            </Link>
          </div>
        </form>
      </div>
    </article>
  );
};
