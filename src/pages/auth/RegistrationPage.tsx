import { Button } from "@/components/ui/button";
import { LogoComponent } from "../../components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomInput } from "@/components/custom/CustomInput";
import { SvgGitHub, SvgGoogle } from "@/components/shared/svg";
import { Link } from "react-router-dom";
import { Form } from "@/components/ui/form";

const formSchema = z
  .object({
    userName: z.string().min(3, "Username must be at least 3 characters."),
    email: z.email(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters.")
      .max(50, "Password is too long.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).*$/,
        "Password must contain at least one uppercase letter."
      ),
    confirmPassword: z.string(),
  })
  .refine((formData) => formData.password === formData.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const RegistrationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <article className=" items-center h-screen flex justify-center">
      <div className=" p-6 rounded-2xl w-90 h-fit border shadow  bg-white ">
        <div className="mb-5 flex justify-center w-full">
          <LogoComponent />
        </div>
        <Form {...form}>
          <div className="flex flex-col gap-4">
            <CustomInput
              name="userName"
              placeholder="Username"
              control={form.control}
            />
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
            <CustomInput
              name="confirmPassword"
              placeholder="Confirm password"
              control={form.control}
              type="password"
            />

            <Button className="w-full" onClick={form.handleSubmit(onSubmit)}>
              Sign up
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
              <span>Already have an account ?</span>
              <Link className="font-bold ms-1" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </article>
  );
};
