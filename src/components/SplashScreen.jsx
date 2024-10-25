import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(isAuthenticated() ? '/home' : '/auth');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="text-center fade-in">
        <div className="text-6xl font-bold text-white pulse mb-4">M</div>
        <h1 className="text-3xl font-bold text-white mb-2">Marketing Mastery</h1>
        <p className="text-white opacity-80">Your Marketing Journey Starts Here</p>
      </div>
    </div>
  );
}