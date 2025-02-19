"use client";
import Svg from "@/components/Svg";
import CheckBox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SingupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pwd: "",
    dob: "",
  });
  const [checkpwd, setCheckpwd] = useState("");
  const [showpwd, setShowpwd] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formData?.pwd !== checkpwd) throw new Error("Password dosen't match");
      if (!agreement) throw new Error("You must accept the terms of agreement");

      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        router.replace("/login");
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
      <section className="relative w-full h-[100%] bg-[#121212] text-[#333] flex flex-row items-center">
        <div className="w-full lg:w-1/2 h-[100%] bg-white pt-9 px-5 md:px-8 lg:px-[60px] xl:px-[110px] lg:pr-[170px] py-12">
          <div className="flex items-center space-x-4 text-3xl uppercase font-extrabold">
            <Image
              className=""
              width={37}
              height={37}
              src="/assets/logo.png"
              alt=""
            />
            <span>Crest Trust</span>
          </div>

          <div className="relative inline-flex items-center mt-12  lg:mt-20 text-2xl lg:text-[33px] font-bold">
            <span className="absolute -top-10 -right-16">
              <Svg />
            </span>
            Create new account
          </div>
          <p className="font-medium text-lg text-gray-500">
            Welcome! Please enter your details
          </p>

          <form onSubmit={submit} className="mt-3">
            <div className="">
              <label className="block text-md font-medium" htmlFor="name">
                Full Name
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
                  value={formData?.name}
                  className="outline-0 py-3 w-full rounded-md"
                  placeholder="Enter your full name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  id="name"
                  name="name"
                  type="text"
                ></input>
              </div>
            </div>

            <div className="mt-3">
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
                  onClick={() => setShowpwd(!showpwd)}
                  className="w-[12%] cursor-pointer flex items-center justify-center left-4"
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
                  type={!showpwd ? "password" : "text"}
                ></input>
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-md font-medium" htmlFor="checkpwd">
                Repeat Password
              </label>
              <div className="w-full relative flex items-center border border-gray-300  mt-2 rounded-md border-[3px] text-gray-500 focus-within:border-primary">
                <span
                  onClick={() => setShowpwd(!showpwd)}
                  className="w-[12%] cursor-pointer flex items-center justify-center left-4"
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
                  value={checkpwd}
                  className="outline-0 py-3 w-full rounded-md"
                  placeholder="Enter your password"
                  onChange={(e) => setCheckpwd(e.target.value)}
                  id="checkpwd"
                  name="checkpwd"
                  type={!showpwd ? "password" : "text"}
                ></input>
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-md font-medium" htmlFor="dob">
                Date of Birth
              </label>
              <input
                value={formData?.dob}
                className="w-full py-3 px-10 border border-gray-300  mt-2 rounded-md text-gray-500 focus:outline-primary"
                placeholder="Enter your email"
                onChange={(e) => {
                  setFormData({ ...formData, dob: e.target.value });
                }}
                id="dob"
                name="dob"
                type="date"
              />
            </div>

            <div className="mt-8 flex items-center space-x-2">
              <CheckBox checked={agreement} setChecked={setAgreement} />
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="remember-me"
              >
                I agree with Terms of service
              </label>
            </div>

            <CustomButton action={submit} />

            <p className="text-center text-md mt-12 text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold">
                Sign in
              </Link>
            </p>
          </form>
        </div>

        <div className="hidden absolute top-0 bottom-0 right-0 lg:flex flex-col items-center justify-center lg:solid w-1/2 h-screen bg-[#121212]">
          <Image
            src="/assets/trade.gif"
            alt="Trade"
            priority
            width={500} // Set the width explicitly
            height={500} // Set the height explicitly
            className="object-contain w-[90%] max-h-[510px]" // Ensures the image scales while maintaining aspect ratio
          />

          <div className="bg-white w-1/2 text-[15px] mt-6 rounded-xl p-3">
            <h3 className="font-semibold">Trade with confidence</h3>
            <p className="leading-[1rem] text-gray-500 text-[13px]">
              Your funds are always backed 1:1 on VtrChains with our regularly
              published audits on our Proof of Reserves.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
