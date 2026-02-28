import { Button } from "@/components/ui/button";
import { LogoComponent } from "../../components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomInput } from "@/components/custom/CustomInput";
import { SvgGitHub, SvgGoogle, SVGLoader } from "@/components/shared/svg";
import { Link } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { useAuth } from "./hooks/useAuth";
import { SessionStatus } from "@/lib/storage";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Password is required"),
});

export const LoginPage = () => {
  const { logIn, authStatus } = useAuth();

  const isLoading = authStatus === SessionStatus.LOADING;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "mofito2322@dolofan.com",
      password: "Bot1234",
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    logIn(formData);
  };


  return (
    <article className="flex items-center justify-center h-screen relative">
      {isLoading && (
        <div className="inset-0 bg-black opacity-20  h-screen w-full absolute flex items-center justify-center"></div>
      )}
      <div className=" p-6 rounded-2xl w-90 h-fit border shadow  bg-white ">
        <div className="mb-5 flex justify-center w-full">
          <LogoComponent />
        </div>
        <Form {...form}>
          <div className="flex flex-col gap-4">
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
            <Button
              className="w-full flex -gap-1"
              onClick={form.handleSubmit(onSubmit)}
            >
              {isLoading && <SVGLoader />} Sign in
            </Button>
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
          </div>
        </Form>
      </div>
    </article>
  );
};
