import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">About Our Team</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              The University of Maryland Unmanned Aerial Systems Team is a student-run organization 
              dedicated to the development of autonomous aircraft systems. Our team consists of 
              passionate students from various engineering disciplines working together to push 
              the boundaries of what's possible in autonomous flight.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              We strive to advance the field of autonomous aerial systems through innovative 
              design, rigorous testing, and competitive excellence. Our team participates in 
              various international competitions, providing members with hands-on experience 
              in real-world engineering challenges.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Team Structure</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technical Teams</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Airframe Design</li>
                  <li>Propulsion Systems</li>
                  <li>Avionics</li>
                  <li>Software Development</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Support Teams</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Project Management</li>
                  <li>Business Development</li>
                  <li>Marketing & Outreach</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;