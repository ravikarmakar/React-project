import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import Card from "./Card";
import About from "./About";
import { GoProjectSymlink } from "react-icons/go";
import Contect from "./Contect";
import { SiCoursera } from "react-icons/si";
import { useState } from "react";

const Tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is the most unique card created using React and Tailwind CSS power."
            image="https://picsum.photos/120"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Project",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is the most unique card created using React and Tailwind CSS power."
            image="https://picsum.photos/140"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is the most unique card created using React and Tailwind CSS power."
            image="https://picsum.photos/160"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contect",
    icon: <FaPhone />,
    label: "Contect",
    content: <Contect />,
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(Tabs[0].id);

  return (
    <div className="p-4 mt-[3rem ]">
      <div className="flex border-b border-gray-200">
        {Tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 font-medium text-sm ${
              activeTab === tab.id ? "border-b-2" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex justify-center items-center space-x-2">
              {tab.icon} <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-lg">
        {Tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tab;
