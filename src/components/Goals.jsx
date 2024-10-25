import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Goals() {
  const navigate = useNavigate();

  const goals = [
    {
      title: 'Increase Website Traffic',
      target: '50K visitors',
      progress: 65,
      dueDate: '2024-03-01'
    },
    {
      title: 'Grow Email List',
      target: '10K subscribers',
      progress: 42,
      dueDate: '2024-02-15'
    },
    {
      title: 'Social Media Engagement',
      target: '25% engagement rate',
      progress: 78,
      dueDate: '2024-02-28'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketing Goals
              </h1>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
            >
              Add Goal +
            </motion.button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{goal.title}</h3>
                  <p className="text-gray-600">Target: {goal.target}</p>
                </div>
                <span className="text-sm text-gray-500">Due: {goal.dueDate}</span>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-2">
            {[
              { icon: '🏠', label: 'Home', path: '/home' },
              { icon: '📚', label: 'Learn', path: '/learn' },
              { icon: '🎯', label: 'Goals', path: '/goals', active: true },
              { icon: '👥', label: 'Community', path: '/community' }
            ].map((item, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center px-3 py-2 rounded-lg ${
                  item.active ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}