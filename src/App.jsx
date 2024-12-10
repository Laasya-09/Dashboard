
import React, { useState } from 'react';
import {
  FaChartLine,
  FaCog,
  FaEllipsisH // Importing the 3 dots icon
  ,








  FaGlobe,
  FaProjectDiagram,
  FaRocket,
  FaUserCircle
} from 'react-icons/fa';

const App = () => {
  const [activeSection, setActiveSection] = useState('Deployments');
  const [activeProduction, setActiveProduction] = useState(null);

  const activityData = {
    "Planetaria / ios-app": [
      { user: "Cosetta Dusett", action: "Pushed to ios-app (27c83j on main)" },
      { user: "Kora Grisostomo", action: "Pushed to ios-app (cdd2d on main)" },
    ],
    "Planetaria / mobile-api": [
      { user: "Pammi Kakani", action: "Pushed to mobile-api (29jsd on main)" },
    ],
    "Tailwind Labs / tailwindcss.com": [
      { user: "Jean-Francois Tippy", action: "Pushed to tailwindcss.com (dd3ac on main)" },
    ],
    "Tailwind Labs / tailwindui.com": [
      { user: "Jean-Francois Tippy", action: "Pushed to tailwindui.com (dd3ac on main)" },
    ],
    "Protocol / relay-service": [
      { user: "Pammi Kakani", action: "Pushed to relay-service (9da3c on main)" },
    ],
    "Protocol / android-app": [],
  };

  const sections = {
    Deployments: (
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaRocket className="mr-2 text-2xl" />
            <h2 className="text-lg font-semibold">Deployments</h2>
          </div>
          <FaEllipsisH className="text-xl text-gray-400 cursor-pointer" />
        </div>
        <div className="space-y-4">
          {Object.keys(activityData).map((project) => (
            <div
              key={project}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-md"
            >
              <div>
                <h3 className="font-medium">{project}</h3>
                <p className="text-gray-400 text-sm">Deploys from GitHub - Initiated recently</p>
              </div>
              <button
                onClick={() => setActiveProduction(project)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Production
              </button>
            </div>
          ))}
        </div>
      </div>
    ),
    Projects: (
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaProjectDiagram className="mr-2 text-2xl" />
            <h2 className="text-lg font-semibold">Projects</h2>
          </div>
          <FaEllipsisH className="text-xl text-gray-400 cursor-pointer" />
        </div>
        <div className="space-y-4">
          {/* Projects content will go here */}
          <h2 className="text-lg font-semibold">Your Projects will be listed here</h2>
        </div>
      </div>
    ),
    Activity: <div><h2 className="text-lg font-semibold">Activity Section</h2></div>,
    Domains: <div><h2 className="text-lg font-semibold">Domains Section</h2></div>,
    Usage: <div><h2 className="text-lg font-semibold">Usage Section</h2></div>,
    Settings: <div><h2 className="text-lg font-semibold">Settings Section</h2></div>,
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col">
        {/* Navigation Heading */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-400">Navigation</h2>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-4">
            {Object.keys(sections).map((section) => (
              <li
                key={section}
                className={`flex items-center cursor-pointer p-2 rounded-md ${
                  activeSection === section ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section === "Projects" && <FaProjectDiagram className="mr-2" />}
                {section === "Deployments" && <FaRocket className="mr-2" />}
                {section === "Activity" && <FaChartLine className="mr-2" />}
                {section === "Domains" && <FaGlobe className="mr-2" />}
                {section === "Usage" && <FaCog className="mr-2" />}
                {section === "Settings" && <FaCog className="mr-2" />}
                {section}
              </li>
            ))}
          </ul>
        </nav>

        {/* Your Teams Section */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Your Teams</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
              <div className="bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
                P
              </div>
              <span>Planetaria</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
              <div className="bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
                P
              </div>
              <span>Protocol</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
              <div className="bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
                T
              </div>
              <span>Tailwind Labs</span>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="mt-auto flex items-center gap-3 bg-gray-700 p-3 rounded-md">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.PKlD9uuBX0m4S8cViqXZHAHaHa&pid=Api&P=0&h=180"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Laasya Vaddepally</p>
            <p className="text-gray-400 text-sm">Laasya</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Top Navbar */}
        <header className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:ring focus:ring-blue-500"
            />
            <button className="text-gray-300 hover:text-white">Documentation</button>
            <button className="text-gray-300 hover:text-white">Community</button>
            <button className="text-gray-300 hover:text-white">Support</button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">+ New Project</button>
        </header>
        {/* Dynamic Section */}
        {sections[activeSection]}
      </div>

      {/* Activity Feed */}
      <aside className="w-80 bg-gray-800 p-4">
        <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
        <div className="space-y-4">
          {activeProduction && activityData[activeProduction]?.length > 0 ? (
            activityData[activeProduction].map((activity, index) => (
              <div
                key={index}
                className="mt-auto flex items-center gap-3 bg-gray-700 p-3 rounded-md"
              >
                <FaUserCircle className="text-2xl" />
                <div>
                  <p className="text-sm font-medium">{activity.user}</p>
                  <p className="text-gray-400 text-sm">{activity.action}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No activity for this project</p>
          )}
        </div>
      </aside>
    </div>
  );
};

export default App;
