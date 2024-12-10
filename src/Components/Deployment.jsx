// src/pages/Deployments.jsx
/*const Deployments = () => {
    const projects = [
      { name: "Planetaria", status: "Deployed", time: "1m ago" },
      { name: "Tailwind Labs", status: "Failed", time: "3m ago" },
    ];
  
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold">Deployments</h2>
        <ul>
          {projects.map((project, idx) => (
            <li key={idx} className="p-2 border-b">
              <span className="font-semibold">{project.name}</span>
              <span className={`ml-2 text-sm ${project.status === "Deployed" ? "text-green-500" : "text-red-500"}`}>
                {project.status}
              </span>
              <span className="ml-2 text-gray-500 text-sm">{project.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Deployments;*/
  // src/components/Deployments.js
import React from 'react';

const deployments = [
  { name: 'Planetaria / ios-app', status: 'In Progress', time: '1m 32s ago' },
  { name: 'Planetaria / mobile-api', status: 'Production', time: '3m ago' },
  { name: 'Tailwind Labs / tailwindcss.com', status: 'Preview', time: '5m ago' },
  { name: 'Protocol / relay-service', status: 'Production', time: '3h ago' },
  // Add more deployments here
];

function Deployments() {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">All Projects</h2>
      <div className="space-y-4">
        {deployments.map((deployment, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
          >
            <div>
              <p className="font-bold">{deployment.name}</p>
              <p className="text-sm text-gray-400">{deployment.time}</p>
            </div>
            <span
              className={`px-2 py-1 rounded ${
                deployment.status === 'Production'
                  ? 'bg-green-600'
                  : deployment.status === 'In Progress'
                  ? 'bg-yellow-500'
                  : 'bg-gray-600'
              }`}
            >
              {deployment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deployments;

  