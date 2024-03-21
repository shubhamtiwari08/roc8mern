"use client"

import Link from "next/link";
import { useState } from "react";
import { api } from "~/trpc/react";
 

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const loginMutation = api.post.login.useMutation();

  const handleLogin = async () => {
    // Extract email and password from formData
    const { email, password } = formData;
    // Call login mutation with email and password
    const data = await loginMutation.mutateAsync({ email, password });
    // Store the token in local storage
    localStorage.setItem("token", data.token);
  };



  return (
    <div className="mt-10 flex justify-center">
      <div className="h-3/4 w-[30rem] rounded-lg border-2 bg-white px-16 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
        <h3 className="text-center font-semibold">Welcome back to ECOMMERCE</h3>
        <p className="text-center text-xs">The next gen business Marketplace</p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin} // Call handleLogin on button click
            className="mb-6 w-full rounded bg-black px-4 py-2 text-white"
          >
            LOGIN
          </button>
          <hr />
        </form>
        <p className="mt-6 text-center text-xs text-gray-600">
          <span>Don&apos;t Have an Account? </span>
          <Link href="/" className="ml-1 space-x-2 font-semibold text-black">
            <span>SIGN UP</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
