import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Community() {
  const navigate = useNavigate();

  const discussions = [
    {
      title: 'Best practices for Instagram Reels?',
      author: 'Sarah K.',
      avatar: '👩‍💼',
      replies: 23,
      likes: 45,
      tags: ['Social Media', 'Content Creation']
    },
    {
      title: 'Email marketing automation tools comparison',
      author: 'Mike R.',
      avatar: '👨‍💻',
      replies: 18,
      likes: 32,
      tags: ['Email Marketing', 'Tools']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketing Community
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                🔍
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
              >
                New Post +
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="space-y-6">
          {discussions.map((discussion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{discussion.avatar}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{discussion.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {discussion.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">By {discussion.author}</span>
                    <span className="mr-4">💬 {discussion.replies}</span>
                    <span>❤️ {discussion.likes}</span>
                  </div>
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
              { icon: '🎯', label: 'Goals', path: '/goals' },
              { icon: '👥', label: 'Community', path: '/community', active: true }
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