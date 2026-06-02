'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // Login logic
        if (!email || !password) {
          setError('Please fill in all fields');
          return;
        }
        // Add your login API call here
        console.log('Login:', { email, password });
      } else {
        // Sign up logic
        if (!email || !password || !confirmPassword) {
          setError('Please fill in all fields');
          return;
        }
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        if (password.length < 6) {
          setError('Password must be at least 6 characters');
          return;
        }
        // Add your sign up API call here
        console.log('Sign up:', { email, password });
      }
      
      // Redirect after successful auth
      router.push('/dashboard');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? 'Login to your account' : 'Sign up to get started'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-gray-600 text-sm">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
              }}
              className="text-blue-500 hover:text-blue-700 font-semibold ml-1"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200">
            Google
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200">
            GitHub
          </button>
        </div>
      </div>
    </div>
    </>
  );
}


