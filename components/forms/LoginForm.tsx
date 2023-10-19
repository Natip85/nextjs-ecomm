"use client";
import { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/src/types";

interface LoginFormProps{
  currentUser: SafeUser|null
}
const LoginForm = ({currentUser}:LoginFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    if(currentUser){
      router.push("/cart")
      router.refresh()
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(true);
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged in.");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if(currentUser){
    return <p className="text-center">Logged in. Redirecting...</p>
  }
  return (
    <>
      <Heading title="Login to E-Shop" />
      <Button
        outline
        label="Continue with google"
        icon={AiOutlineGoogle}
        onClick={() => {signIn('google')}}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      <Button
        label={isLoading ? "Loading..." : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Do not have an account?{" "}
        <Link href={"/register"} className="underline">
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
