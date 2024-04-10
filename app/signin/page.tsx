"use client";

import { ChangeEvent, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const router = useRouter();
  const [usrType, setUsrType] = useState("");
  const [usrEmail, setUsrEmail] = useState("");
  const [usrPass, setUsrPass] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usrType === "") {
      setMsg("Select User Type");
      return;
    }
    if (usrEmail === "") {
      setMsg("Input User Email");
      return;
    }
    if (usrPass === "") {
      setMsg("Input a password");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <>
      <Header />
      <div className="pb-10"></div>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Sign in to your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Login to your account
                </p>

                <form onSubmit={(e) => onSubmitHandler(e)}>
                  <div className="mb-8">
                    <label className="mb-2.5 block text-black dark:text-white">
                      SignIn As
                    </label>

                    <div className="dark:bg-form-input relative z-20 bg-transparent">
                      <select
                        name="userType"
                        value={usrType}
                        onChange={(e) => {
                          setUsrType(e.target.value);
                        }}
                        className="border-stroke dark:border-form-strokedark dark:bg-form-input relative z-20 w-full appearance-none rounded border bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:focus:border-primary"
                      >
                        <option
                          value=""
                          className="text-body dark:text-bodydark"
                        >
                          Select your type
                        </option>
                        <option
                          value="1"
                          className="text-body dark:text-bodydark"
                        >
                          Admin
                        </option>
                        <option
                          value="2"
                          className="text-body dark:text-bodydark"
                        >
                          Company
                        </option>
                        <option
                          value="3"
                          className="text-body dark:text-bodydark"
                        >
                          Supplier
                        </option>
                      </select>

                      <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      value={usrEmail}
                      onChange={(e) => {
                        setUsrEmail(e.target.value);
                      }}
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="userPass"
                      value={usrPass}
                      onChange={(e) => {
                        setUsrPass(e.target.value);
                      }}
                      placeholder="Enter your Password"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div
                    className="m-10 justify-center font-bold"
                    style={{ color: "red" }}
                  >
                    {msg}
                  </div>
                  <div className="mb-6">
                    <button className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SigninPage;
