"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Eye, EyeOff, Star } from "lucide-react";
import { schema, SignInData } from "@/schema/signin";
import MailIcon from "../icons/MailIcon";
import { useState } from "react";
import { toast } from "sonner";
import { signInAction } from "@/actions/auth";

export default function SignInForm() {
  const [viewPassword, setViewPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      signed: false,
    },
  });

  const onSubmit = async (data: SignInData) => {
    const res = await signInAction(data);

    if (res.isError) {
      toast.error("Wrong Credentials", {
        description:
          "Double-check your details and try again, or reset your password.",
      });
    } else {
      toast.success("Logged In Successfully", {
        description: "Welcome back!",
      });
      window.location.replace("/");
    }
  };

  return (
    <Card className="p-8 gap-8 rounded-2xl">
      <CardHeader className="p-0 text-center gap-2">
        <CardTitle className="text-3xl font-semibold text-gray-700 flex flex-col gap-4">
          <span>
            Fresh<span className="text-primary-main">Cart</span>
          </span>
          <span>Welcome Back!</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-700 font-medium">
          Sign in to continue your fresh shopping experience
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0 pt-0 pb-2 space-y-6">
        <div className="px-8 flex flex-col gap-3 mb-6">
          <Button className="h-auto px-4 py-3 bg-transparent border-gray-300 rounded-lg gap-3 text-gray-900 text-base hover:bg-primary-50/50">
            <svg
              className="size-5"
              data-icon="inline-start"
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8281 9.20391C19.8281 14.1785 16.4215 17.7188 11.3906 17.7188C6.56719 17.7188 2.67188 13.8234 2.67188 9C2.67188 4.17656 6.56719 0.28125 11.3906 0.28125C13.7391 0.28125 15.7148 1.14258 17.2371 2.56289L14.8641 4.84453C11.7598 1.84922 5.98711 4.09922 5.98711 9C5.98711 12.041 8.41641 14.5055 11.3906 14.5055C14.843 14.5055 16.1367 12.0305 16.3406 10.7473H11.3906V7.74844H19.691C19.7719 8.19492 19.8281 8.62383 19.8281 9.20391Z"
                fill="#FB2C36"
              />
            </svg>
            Continue with Google
          </Button>
          <Button className="h-auto px-4 py-3 bg-transparent border-gray-300 rounded-lg gap-3 text-gray-900 text-base hover:bg-primary-50/50">
            <svg
              className="size-5"
              data-icon="inline-start"
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 9C20.25 4.02891 16.2211 0 11.25 0C6.27891 0 2.25 4.02891 2.25 9C2.25 13.2188 5.15742 16.7625 9.07734 17.7363V11.7492H7.22109V9H9.07734V7.81523C9.07734 4.75313 10.4625 3.33281 13.4719 3.33281C14.0414 3.33281 15.0258 3.44531 15.4301 3.55781V6.04688C15.2191 6.02578 14.85 6.01172 14.3895 6.01172C12.9129 6.01172 12.3434 6.5707 12.3434 8.02266V9H15.2824L14.7762 11.7492H12.3398V17.9332C16.7977 17.3953 20.25 13.602 20.25 9Z"
                fill="#155DFC"
              />
            </svg>
            Continue with Facebook
          </Button>
        </div>

        <div className="flex items-center before:flex-1 before:h-0.5 before:bg-gray-300/30 after:flex-1 after:h-0.5 after:bg-gray-300/30">
          <span className="px-4 font-medium text-sm text-gray-700 uppercase">
            or continue with email
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <FieldGroup>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </FieldLabel>
                  <InputGroup className="h-13 rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                    <InputGroupInput
                      {...field}
                      id="email"
                      name="email"
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email"
                      className="p-0 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                    />
                    <InputGroupAddon className="text-gray-400">
                      <MailIcon size="size-5" />
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />
          </FieldGroup>
          {/* Password */}
          <FieldGroup>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 justify-between"
                  >
                    Password
                    <Link href="/forget-password" className="text-primary-main">
                      Forgot Password?
                    </Link>
                  </FieldLabel>
                  <InputGroup className="h-13 rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                    <InputGroupInput
                      {...field}
                      id="password"
                      name="password"
                      type={viewPassword ? "text" : "password"}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                      className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                    />
                    <InputGroupAddon className="text-gray-400">
                      <svg
                        className="size-4.5"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 4V6H12V4C12 2.89687 11.1031 2 10 2C8.89687 2 8 2.89687 8 4ZM6 6V4C6 1.79063 7.79063 0 10 0C12.2094 0 14 1.79063 14 4V6C15.1031 6 16 6.89687 16 8V15C16 16.1031 15.1031 17 14 17H6C4.89688 17 4 16.1031 4 15V8C4 6.89687 4.89688 6 6 6Z"
                          fill="#99A1AF"
                        />
                      </svg>
                    </InputGroupAddon>
                    <InputGroupAddon
                      className="text-gray-400 cursor-pointer hover:text-gray-500"
                      align="inline-end"
                      onClick={() => setViewPassword(!viewPassword)}
                    >
                      {viewPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              )}
            />
          </FieldGroup>
          {/*  Keep signed in */}
          <FieldGroup>
            <Controller
              name="signed"
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={value}
                      onCheckedChange={onChange}
                      id="signed"
                      name="signed"
                      className="size-4 rounded-[2.5px] bg-white border-[#767676]"
                    />
                    <FieldLabel
                      htmlFor="signed"
                      className="inline-block text-gray-700 text-base font-medium"
                    >
                      Keep me signed in
                    </FieldLabel>
                  </div>
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />
          </FieldGroup>

          <Button
            className="h-auto w-full py-3 rounded-xl bg-primary-main text-white font-semibold text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting && <Spinner data-icon="inline-start" />}
            Sign In
          </Button>
        </form>
      </CardContent>

      <CardFooter className="pt-6 px-0 border-t border-gray-300/30 flex-col gap-6">
        <p className="text-base font-medium text-gray-700 text-center">
          New to FreshCart?{" "}
          <Link href="/register" className="text-primary-main">
            Create an account
          </Link>
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <span className="flex items-center gap-1 text-gray-500 text-xs font-medium ">
            <svg
              className="size-4"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V6H12V4C12 2.89687 11.1031 2 10 2C8.89687 2 8 2.89687 8 4ZM6 6V4C6 1.79063 7.79063 0 10 0C12.2094 0 14 1.79063 14 4V6C15.1031 6 16 6.89687 16 8V15C16 16.1031 15.1031 17 14 17H6C4.89688 17 4 16.1031 4 15V8C4 6.89687 4.89688 6 6 6Z"
                fill="currentColor"
              />
            </svg>
            SSL Secured
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-xs font-medium">
            <svg
              className="size-4"
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0.375C8.14647 0.375 8.76645 0.631807 9.22357 1.08893C9.68069 1.54605 9.9375 2.16603 9.9375 2.8125C9.9375 3.45897 9.68069 4.07895 9.22357 4.53607C8.76645 4.99319 8.14647 5.25 7.5 5.25C6.85353 5.25 6.23355 4.99319 5.77643 4.53607C5.31931 4.07895 5.0625 3.45897 5.0625 2.8125C5.0625 2.16603 5.31931 1.54605 5.77643 1.08893C6.23355 0.631807 6.85353 0.375 7.5 0.375ZM2.25 2.0625C2.47161 2.0625 2.69104 2.10615 2.89578 2.19095C3.10052 2.27576 3.28654 2.40006 3.44324 2.55676C3.59994 2.71346 3.72424 2.89948 3.80905 3.10422C3.89385 3.30896 3.9375 3.52839 3.9375 3.75C3.9375 3.97161 3.89385 4.19104 3.80905 4.39578C3.72424 4.60052 3.59994 4.78654 3.44324 4.94324C3.28654 5.09994 3.10052 5.22424 2.89578 5.30905C2.69104 5.39385 2.47161 5.4375 2.25 5.4375C2.02839 5.4375 1.80896 5.39385 1.60422 5.30905C1.39948 5.22424 1.21346 5.09994 1.05676 4.94324C0.900058 4.78654 0.775758 4.60052 0.690953 4.39578C0.606148 4.19104 0.5625 3.97161 0.5625 3.75C0.5625 3.52839 0.606148 3.30896 0.690953 3.10422C0.775758 2.89948 0.900058 2.71346 1.05676 2.55676C1.21346 2.40006 1.39948 2.27576 1.60422 2.19095C1.80896 2.10615 2.02839 2.0625 2.25 2.0625ZM0 9.75C0 8.09297 1.34297 6.75 3 6.75C3.3 6.75 3.59062 6.79453 3.86484 6.87656C3.09375 7.73906 2.625 8.87813 2.625 10.125V10.5C2.625 10.7672 2.68125 11.0203 2.78203 11.25H0.75C0.335156 11.25 0 10.9148 0 10.5V9.75ZM12.218 11.25C12.3187 11.0203 12.375 10.7672 12.375 10.5V10.125C12.375 8.87813 11.9062 7.73906 11.1352 6.87656C11.4094 6.79453 11.7 6.75 12 6.75C13.657 6.75 15 8.09297 15 9.75V10.5C15 10.9148 14.6648 11.25 14.25 11.25H12.218ZM11.0625 3.75C11.0625 3.30245 11.2403 2.87322 11.5568 2.55676C11.8732 2.24029 12.3024 2.0625 12.75 2.0625C13.1976 2.0625 13.6268 2.24029 13.9432 2.55676C14.2597 2.87322 14.4375 3.30245 14.4375 3.75C14.4375 4.19755 14.2597 4.62677 13.9432 4.94324C13.6268 5.25971 13.1976 5.4375 12.75 5.4375C12.3024 5.4375 11.8732 5.25971 11.5568 4.94324C11.2403 4.62677 11.0625 4.19755 11.0625 3.75ZM3.75 10.125C3.75 8.05312 5.42812 6.375 7.5 6.375C9.57187 6.375 11.25 8.05312 11.25 10.125V10.5C11.25 10.9148 10.9148 11.25 10.5 11.25H4.5C4.08516 11.25 3.75 10.9148 3.75 10.5V10.125Z"
                fill="#6A7282"
              />
            </svg>
            50K+ Users
          </span>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Star className="fill-current size-4" />
            4.9 Rating
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
