"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type TRegisterAndLogInIputsProps } from "@/types/dataService";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import TextInputs from "../FormInputs/TextInputs";
import Link from "next/link";
import Image from "next/image";
import { Apple } from "lucide-react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function LoginFormWithBg({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterAndLogInIputsProps>();

  //   async function onSubmit(data: TRegisterAndLogInIputsProps) {
  //     try {
  //       setIsLoading(true);
  //       console.log("Attempting to sign in with credentials:", data);
  //       const loginData = await signIn("credentials", {
  //         ...data,
  //         redirect: false,
  //         role: data.role ?? "USER",
  //       });
  //       // console.log(data.role)
  //       console.log("SignIn response:", loginData);
  //       if (loginData?.error) {
  //         setIsLoading(false);
  //         toast.error("Sign-in error: Check your credentials");
  //         setShowNotification(true);
  //       } else {
  //         // Sign-in was successful
  //         setShowNotification(false);
  //         reset();
  //         setIsLoading(false);
  //         toast.success("Login Successful");
  //         // if(loginData.role === "USER"){
  //         //   router.push("/users/dashboard");
  //         // }
  //         router.push("/dashboard");
  //       }
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.error("Network Error:", error);
  //       toast.error("Its seems something is wrong with your Network");
  //     }
  //   }
  //   onSubmit={handleSubmit(onSubmit)}
  return (
      <Card className="overflow-hidden h-full w-full pt-20" {...props}>
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/images/car-1.avif"
              alt="Iamge"
              width={1920}
              height={1080}
              className="linear-bg absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale "
            />
          </div>
          <form className="p-6 md:p-8">
            {showNotification && (
              <Alert color="failure" icon={HiInformationCircle}>
                <span className="font-medium">Sign-in error!</span> Please Check
                your credentials
              </Alert>
            )}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold text-main">Log In</h1>
                <p className="text-muted-foreground">
                  Enter Your email below to login to your account.
                </p>
              </div>
              <TextInputs
                label="Email address"
                name="email"
                register={register}
                errors={errors}
                type="email"
                placeholder="EG. awad@gmail.com"
              />
              <TextInputs
                label="Password"
                name="password"
                register={register}
                errors={errors}
                type="password"
                placeholder="******"
                page="login"
              />
              <SubmitButton
                title=" Log in"
                isLoading={isLoading}
                titleLoading="logging in please wait..."
                className="bg-main text-md dark:bg-bg dark:text-black"
              />
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <FaApple className="w-4 h-4 shrink" />
                  <span className="sr-only">Login with Apple</span>
                </Button>
                <Button variant="outline" className="w-full">
                  <FaGoogle className="w-4 h-4 shrink " />
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-main underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
  );
}
