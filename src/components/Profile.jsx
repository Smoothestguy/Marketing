import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const stats = [
    { label: 'Courses Completed', value: 3 },
    { label: 'Achievements', value: 12 },
    { label: 'Community Posts', value: 8 }
  ];

  const menuItems = [
    { icon: '⚙️', label: 'Settings' },
    { icon: '🔒', label: 'Privacy' },
    { icon: '❓', label: 'Help & Support' },
    { icon: '📝', label: 'Terms of Service' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth');
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => navigate(-1)} className="mr-4">
                ←
              </button>
              <h1 className="text-xl font-bold">Profile</h1>
            </div>
            <button className="text-blue-600 text-sm font-medium">
              Edit
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h2 className="text-xl font-bold">{userData.fullName}</h2>
              <p className="text-gray-600">{userData.email}</p>
              {userData.provider && (
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mt-1">
                  {userData.provider} Account
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm text-center"
            >
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              <span className="text-gray-400">→</span>
            </button>
          ))}
        </motion.div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={handleLogout}
          className="w-full mt-6 p-4 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors"
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
}