import { Button } from "@/components/ui/button";
import { LogoComponent } from "../../components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomInput } from "@/components/custom/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { createAccount } from "@/services/auth";
import { toast } from "sonner";
import type { AxiosError } from "axios";

const formSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters."),
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
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {

      const { confirmPassword, ...accountData } = formData;

      console.log(accountData)

     
      const { user } = await createAccount(accountData);

      if(user){
        toast.success("The user account was successfully created.");
        navigate("/login")
      }

     
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      console.log(err)
      toast.error(err.response?.data.message || "");
    }
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
              name="username"
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
