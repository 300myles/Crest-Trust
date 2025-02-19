"use client";
import Svg from "@/components/Svg";
import CheckBox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

export default function LoginPage() {
  const router = useRouter();
  const {setAdmin} = useUser();
  const [formData, setFormData] = useState({
    email: "",
    pwd: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setAdmin(data);
        router.replace("/dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
      </Head>
      <section className="relative text-[#333] w-full flex justify-center items-center flex-col text-center h-[100%] bg-white">
        <div className="w-full md:w-1/2 h-[100%] bg-white py-12">
          <div className="flex text-[#333] justify-center items-center space-x-4 text-3xl uppercase font-extrabold">
            <Image
              className=""
              width={37}
              height={37}
              src="/assets/logo.png"
              alt=""
            />
            <span>Crest Trust Admin</span>
          </div>

          <div className="relative inline-flex text-[#333] items-center mt-16 text-[33px] capitalize font-bold">
            <span className="absolute -top-10 -right-16">
              <Svg />
            </span>
            Sign in
          </div>
          <p className="font-medium text-lg text-gray-500">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={submit} className="mt-3 text-start">
            <div className="">
              <label className="block text-md font-medium" htmlFor="email">
                Email
              </label>
              <input
                value={formData?.email}
                className="w-full py-3 px-10 border border-gray-300  mt-2 rounded-md text-gray-500 focus:outline-primary"
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                id="email"
                name="email"
                type="email"
              />
            </div>

            <div className="mt-3">
              <label className="block text-md font-medium" htmlFor="pwd">
                Password
              </label>
              <div className="w-full relative flex items-center border border-gray-300  mt-2 rounded-md border-[3px] text-gray-500 focus-within:border-primary">
                <span
                  onClick={() => {}}
                  className="w-[12%] flex items-center justify-center left-4"
                >
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.625 5.25H9.0625V3.5625C9.0625 1.61719 7.44531 0 5.5 0C3.53125 0 1.9375 1.61719 1.9375 3.5625V5.25H1.375C0.742188 5.25 0.25 5.76562 0.25 6.375V10.875C0.25 11.5078 0.742188 12 1.375 12H9.625C10.2344 12 10.75 11.5078 10.75 10.875V6.375C10.75 5.76562 10.2344 5.25 9.625 5.25ZM7.1875 5.25H3.8125V3.5625C3.8125 2.64844 4.5625 1.875 5.5 1.875C6.41406 1.875 7.1875 2.64844 7.1875 3.5625V5.25Z"
                      fill="#667085"
                    ></path>
                  </svg>
                </span>
                <input
                  value={formData?.pwd}
                  className="outline-0 py-3 w-full rounded-md"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setFormData({ ...formData, pwd: e.target.value })
                  }
                  id="pwd"
                  name="pwd"
                  type="password"
                ></input>
              </div>
            </div>

            <div
              onClick={() => setRememberMe(!rememberMe)}
              className="mt-8 cursor-pointer flex items-center space-x-2"
            >
              <CheckBox checked={rememberMe} setChecked={setRememberMe} />
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="remember-me"
              >
                Remember me
              </label>
            </div>

            <CustomButton
              disabled={isSubmitting || !formData?.email || !formData?.pwd}
              action={submit}
            />
          </form>
        </div>

      </section>
    </>
  );
}
