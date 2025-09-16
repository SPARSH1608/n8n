import { AuthProvider, useAuth } from '@/context/AuthContext';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const AuthModal = ({
  onClose,
  initialMode = "signin",
}: {
  onClose: () => void;
  initialMode?: "signup" | "signin";
}) => {
  const { signup, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupMode, setIsSignupMode] = useState(initialMode === "signup");
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignupMode) {
        await signup(email);
        alert('Magic link sent! Check your email.');
      } else {
     const res = await login(email, password);
     console.log('Login response:', res,typeof(res));
     console.log('test', res?.email, res?.token);
  
     if (res?.email && res?.token) {
      console.log('Navigating to dashboard');
       navigate('/dashboard');
       onClose()
}
      
    }
    } catch {
      setError('Something went wrong');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-96 space-y-4">
        <h2 className="text-xl font-bold">{isSignupMode ? 'Sign Up' : 'Sign In'}</h2>

        <input
          type="email"
          placeholder="Email"
          className="input w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {!isSignupMode && (
          <input
            type="password"
            placeholder="Password"
            className="input w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        )}

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="btn w-full">
          {isSignupMode ? 'Send Magic Link' : 'Sign In'}
        </button>

        <p className="text-center text-sm">
          {isSignupMode ? 'Already have an account?' : "Don't have an account?"}
          <button
            type="button"
            className="text-blue-500 ml-1"
            onClick={() => setIsSignupMode(!isSignupMode)}
          >
            {isSignupMode ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
        <button
          type="button"
          className="absolute top-2 right-4 text-gray-400 hover:text-black text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </form>
    </div>
  );
};

export default AuthModal;