
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
              the boundaries of what's possible in autonomous flight. While our operations were shut down during the pandemic, 
              we are excited to be competing in the <a href="https://suas-competition.org" target="_blank" rel="noopener noreferrer" className="text-umdred hover:text-red-700">2025 SUAS competition</a>.
            </p>

            <h2 className="text-2xl font-semibold mb-4">SUAS Competition</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-700 mb-4">
                The Student Unmanned Aerial Systems (SUAS) Competition challenges teams to design, 
                integrate, report on, and demonstrate a UAS capable of autonomous flight and navigation, 
                remote sensing, and payload delivery.
              </p>
              <h3 className="text-xl font-semibold mb-3">Main Objectives:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Flying Waypoint Laps - Autonomous navigation through predefined waypoints</li>
                <li>Mapping of Course - Creating detailed aerial maps of the competition area</li>
                <li>Object Detection & Classification - Identifying and categorizing ground objects</li>
                <li>Payload Airdrop - Precise delivery of payloads to designated locations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Executive Board</h2>
            <div className="space-y-8 mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={`exec-${i}`} className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                    <p className="text-center text-gray-500">[Name]</p>
                    <p className="text-center text-gray-400 text-sm">[Role]</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Sub Teams</h2>
            
            <div className="space-y-8">
              {/* Software Team */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Software</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-32 h-32 mx-auto overflow-hidden rounded-full mb-4">
                      <img 
                        src="/lovable-uploads/1b717518-9496-4205-9466-d1c3d068c5d6.png"
                        alt="Michael Chun"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-gray-500">Michael Chun</p>
                    <p className="text-center text-gray-400 text-sm">Software Lead</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-32 h-32 mx-auto overflow-hidden rounded-full mb-4">
                      <img 
                        src="/lovable-uploads/2bab805d-f2a1-485d-b597-20fbdbdffc36.png"
                        alt="Shivam Garg"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="text-center text-gray-500">Shivam Garg</p>
                    <p className="text-center text-gray-400 text-sm">ODCL Sublead + Web Developer</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                    <p className="text-center text-gray-500">[Name]</p>
                    <p className="text-center text-gray-400 text-sm">[Role]</p>
                  </div>
                </div>
              </div>

              {/* Hardware Team */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Hardware</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-32 h-32 mx-auto overflow-hidden rounded-full mb-4">
                      <img 
                        src="/lovable-uploads/4806045c-a291-4782-a0da-06addc10b471.png"
                        alt="Ishmael Agui"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="text-center text-gray-500">Ishmael Agui</p>
                    <p className="text-center text-gray-400 text-sm">Hardware Lead</p>
                  </div>
                  {[1, 2].map((i) => (
                    <div key={`hardware-${i}`} className="bg-gray-50 p-4 rounded-lg">
                      <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                      <p className="text-center text-gray-500">[Name]</p>
                      <p className="text-center text-gray-400 text-sm">[Role]</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Airframe Team */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Airframe</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={`airframe-${i}`} className="bg-gray-50 p-4 rounded-lg">
                      <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                      <p className="text-center text-gray-500">[Name]</p>
                      <p className="text-center text-gray-400 text-sm">[Role]</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
