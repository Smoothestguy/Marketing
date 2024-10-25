import { motion } from 'framer-motion';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { courses } from './courseData';

export default function CourseList() {
  const navigate = useNavigate();
  const { searchQuery, selectedCategory } = useOutletContext();

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => navigate(`/learn/course/${course.id}`)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{course.icon}</span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Level: {course.level}</span>
                  <span className="text-gray-500">{course.totalLessons} Lessons</span>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-2 text-xs flex rounded-full bg-blue-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress || 0}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600 font-medium">
                      {course.progress || 0}% Complete
                    </span>
                    {course.progress > 0 && (
                      <span className="text-green-600">
                        Continue →
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}