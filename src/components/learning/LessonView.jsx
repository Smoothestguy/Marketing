import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from './courseData';
import ReactMarkdown from 'react-markdown';

export default function LessonView() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  const course = courses.find(c => c.id === parseInt(courseId));
  const lesson = course?.lessons.find(l => l.id === parseInt(lessonId));

  if (!course || !lesson) {
    return <div>Lesson not found</div>;
  }

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    if (!lesson.quiz?.questions) return;

    let correctAnswers = 0;
    lesson.quiz.questions.forEach((question, index) => {
      if (quizAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const finalScore = (correctAnswers / lesson.quiz.questions.length) * 100;
    setScore(finalScore);
    setQuizSubmitted(true);
  };

  const handleNextLesson = () => {
    const currentIndex = course.lessons.findIndex(l => l.id === lesson.id);
    if (currentIndex < course.lessons.length - 1) {
      navigate(`/learn/course/${courseId}/lesson/${course.lessons[currentIndex + 1].id}`);
      setShowQuiz(false);
      setQuizSubmitted(false);
      setQuizAnswers({});
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <button
          onClick={() => navigate(`/learn/course/${courseId}`)}
          className="text-blue-600 hover:text-blue-700 mb-4"
        >
          ← Back to Course
        </button>
        <h2 className="text-2xl font-display font-bold mb-2">{lesson.title}</h2>
        <div className="text-sm text-gray-500">
          Duration: {lesson.duration}
        </div>
      </div>

      {!showQuiz ? (
        <>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{lesson.content}</ReactMarkdown>
          </div>

          {lesson.quiz && (
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowQuiz(true)}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Take Lesson Quiz
              </motion.button>
            </div>
          )}
        </>
      ) : (
        <AnimatePresence mode="wait">
          {lesson.quiz && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-bold mb-6">Lesson Quiz</h3>
              
              {!quizSubmitted ? (
                <form onSubmit={handleQuizSubmit} className="space-y-6">
                  {lesson.quiz.questions.map((question, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <p className="font-medium mb-4">{question.question}</p>
                      <div className="space-y-3">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-start space-x-3">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={optionIndex}
                              onChange={() => setQuizAnswers(prev => ({
                                ...prev,
                                [index]: optionIndex
                              }))}
                              className="mt-1"
                            />
                            <span className="text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Submit Quiz
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center">
                    <h4 className="text-xl font-bold mb-2">Quiz Results</h4>
                    <div className="text-4xl font-bold mb-2">
                      {score}%
                    </div>
                    <p className="text-gray-600">
                      {score >= 70 
                        ? "Great job! You can move on to the next lesson." 
                        : "Review the material and try again to improve your score."}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {lesson.quiz.questions.map((question, index) => (
                      <div key={index} className={`p-6 rounded-lg ${
                        quizAnswers[index] === question.correctAnswer
                          ? 'bg-green-50'
                          : 'bg-red-50'
                      }`}>
                        <p className="font-medium mb-2">{question.question}</p>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded ${
                                optionIndex === question.correctAnswer
                                  ? 'bg-green-100 text-green-800'
                                  : quizAnswers[index] === optionIndex
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-white'
                              }`}
                            >
                              {option}
                              {optionIndex === question.correctAnswer && (
                                <span className="ml-2">✓</span>
                              )}
                            </div>
                          ))}
                        </div>
                        {quizAnswers[index] !== question.correctAnswer && (
                          <div className="mt-4 text-sm text-gray-600">
                            <strong>Explanation:</strong> {question.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setQuizAnswers({});
                      }}
                      className="px-6 py-3 text-gray-600 hover:text-gray-900"
                    >
                      Try Again
                    </button>
                    {score >= 70 && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleNextLesson}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Next Lesson →
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}