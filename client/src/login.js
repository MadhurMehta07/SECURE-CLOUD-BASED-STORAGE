import React from 'react';

function Login() {
  return (
    <div className="flex tracking-wider text-center justify-center overflow-x-hidden items-center h-screen" style={{ backgroundColor: 'black', color: '#f2ebe9' }}>
      <div className="rounded-2xl mx-20 hover:shadow-2xl transform duration-300" style={{ backgroundColor: 'transparent' }}>
        <a href="/">
          <button className="absolute block py-2 px-4 text-sm transform duration-200 hover:-translate-y-1" style={{ top: '0.5rem', right: '0.5rem' }}>Back</button>
        </a>
        <div className="m-10 sm:mx-20 lg:mx-40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-10 font-bold">Secure File Storage</h1>
          <h2 className="lg:text-lg">Login to your account</h2>
          <form className="mt-12">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left text-xl mb-2">Username:</label>
              <input type="email" id="email" name="username" required className="py-2 px-3 rounded-md border-2" />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="password" className="text-left text-xl mb-2">Password:</label>
              <input type="password" id="password" name="password" required className="py-2 px-3 rounded-md border-2" />
            </div>
            <button type="submit" className="mt-8 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</button>
            <button type="submit" className="mt-8 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
