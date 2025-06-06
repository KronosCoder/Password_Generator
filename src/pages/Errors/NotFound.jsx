import React, { useEffect, useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link , useNavigate } from 'react-router-dom';

export default function NotFound () {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className={`text-center max-w-md transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-light text-slate-300 tracking-tight animate-pulse">
            404
          </h1>
        </div>

        {/* Message */}
        <div className={`mb-12 space-y-4 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-2xl font-medium text-slate-800">
            Page not found
          </h2>
          <p className="text-slate-500 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className={`flex flex-col sm:flex-row gap-3 justify-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Link to='/' className="group flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <Home size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Go home</span>
          </Link>
          
          <button onClick={() => navigate(-1)} className="group flex items-center justify-center space-x-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md">
            <ArrowLeft size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Go back</span>
          </button>
        </div>
      </div>
    </div>
  );
}