
import {
  ChartBarIcon,
  CogIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  UserGroupIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React from "react";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 bg-gray-800 text-gray-300 flex flex-col justify-between p-4">
      
      <div className="text-center mb-8">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Logo"
          className="w-12 h-12 mx-auto"
        />
      </div>

     
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Navigation
        </h4>
        <ul>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("projects")}
          >
            <FolderIcon className="h-5 w-5 mr-3" />
            Projects
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("deployments")}
          >
            <ServerIcon className="h-5 w-5 mr-3" />
            Deployments
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("activity")}
          >
            <WifiIcon className="h-5 w-5 mr-3" />
            Activity
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("domains")}
          >
            <GlobeAltIcon className="h-5 w-5 mr-3" />
            Domains
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("usage")}
          >
            <ChartBarIcon className="h-5 w-5 mr-3" />
            Usage
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("settings")}
          >
            <CogIcon className="h-5 w-5 mr-3" />
            Settings
          </li>
        </ul>
      </div>

      
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Your Teams
        </h4>
        <ul>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Planeteria
          </li>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Protocol
          </li>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Tailwind Labs
          </li>
        </ul>
      </div>

      
      <div className="flex items-center mt-auto">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-sm font-medium">Benjamin Button</p>
          <p className="text-xs text-gray-500">@benjbutt</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
/*import {
  ChartBarIcon,
  CogIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  UserGroupIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React from "react";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 bg-gray-800 text-gray-300 flex flex-col justify-between p-4">
     
      <div className="text-center mb-8">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Logo"
          className="w-12 h-12 mx-auto"
        />
      </div>

   
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Navigation
        </h4>
        <ul>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("projects")}
          >
            <FolderIcon className="h-5 w-5 mr-3" />
            Projects
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("deployments")}
          >
            <ServerIcon className="h-5 w-5 mr-3" />
            Deployments
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("activity")}
          >
            <WifiIcon className="h-5 w-5 mr-3" />
            Activity
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("domains")}
          >
            <GlobeAltIcon className="h-5 w-5 mr-3" />
            Domains
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("usage")}
          >
            <ChartBarIcon className="h-5 w-5 mr-3" />
            Usage
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("settings")}
          >
            <CogIcon className="h-5 w-5 mr-3" />
            Settings
          </li>
        </ul>
      </div>

      
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Your Teams
        </h4>
        <ul>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Planeteria
          </li>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Protocol
          </li>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Tailwind Labs
          </li>
        </ul>
      </div>

     
      <div className="flex items-center mt-auto">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-sm font-medium">Benjamin Button</p>
          <p className="text-xs text-gray-500">@benjbutt</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;*/
/*import {
  ChartBarIcon,
  CogIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  UserGroupIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React from "react";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 bg-gray-800 text-gray-300 flex flex-col justify-between p-4">
      
      <div className="text-center mb-8">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Logo"
          className="w-12 h-12 mx-auto"
        />
      </div>

     
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Navigation
        </h4>
        <ul>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("projects")}
          >
            <FolderIcon className="h-5 w-5 mr-3" />
            Projects
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("deployments")}
          >
            <ServerIcon className="h-5 w-5 mr-3" />
            Deployments
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("activity")}
          >
            <WifiIcon className="h-5 w-5 mr-3" />
            Activity
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("domains")}
          >
            <GlobeAltIcon className="h-5 w-5 mr-3" />
            Domains
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("usage")}
          >
            <ChartBarIcon className="h-5 w-5 mr-3" />
            Usage
          </li>
          <li
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={() => setActiveSection("settings")}
          >
            <CogIcon className="h-5 w-5 mr-3" />
            Settings
          </li>
        </ul>
      </div>

     
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Your Teams
        </h4>
        <ul>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Planeteria
          </li>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Protocol
          </li>
          <li className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Tailwind Labs
          </li>
        </ul>
      </div>

     
      <div className="flex items-center mt-auto">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-sm font-medium">Benjamin Button</p>
          <p className="text-xs text-gray-500">@benjbutt</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;*/
