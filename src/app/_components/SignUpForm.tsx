// SignupForm.tsx
import Link from 'next/link';
import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white py-10 px-16 rounded-lg border-2 w-[30rem] h-3/4">
        <h2 className="text-2xl text-center font-semibold mb-6">Create your account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-black text-white py-2 px-4 rounded w-full">Create Account</button>
        </form>
        <p className="mt-10 text-gray-600 text-xs text-center">Have an account? <Link href="/login" className="text-black space-x-2 font-semibold ml-1">LOGIN</Link></p>
      </div>
    </div>
  );
}

export default SignupForm;
