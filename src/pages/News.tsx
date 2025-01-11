import { motion } from "framer-motion";

const newsItems = [
  {
    date: "March 15, 2024",
    title: "First Place in Navigation Challenge",
    content: "Our team secured first place in the autonomous navigation challenge at the International Drone Competition.",
  },
  {
    date: "February 28, 2024",
    title: "New Drone Prototype Unveiled",
    content: "The team successfully completed the first test flight of our latest autonomous drone prototype.",
  },
  {
    date: "January 15, 2024",
    title: "Spring Recruitment Drive",
    content: "Join our growing team! We're looking for passionate students interested in autonomous systems and aerospace engineering.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
          
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;