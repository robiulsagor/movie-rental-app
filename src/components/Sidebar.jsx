import { useState } from "react";
import { FaFireAlt, FaFolderPlus, FaRegHeart } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const links = [
  { id: 1, icon: <FaFireAlt />, title: "Trending Now" },
  { id: 2, icon: <FaFolderPlus />, title: "New Releases" },
  { id: 3, icon: <IoCalendarOutline />, title: "Coming Soon" },
  { id: 4, icon: <FaRegHeart />, title: "Favorites" },
  { id: 5, icon: <MdOutlineWatchLater />, title: "Watch Later" },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <aside>
      <ul className="space-y-2">
        {links.map((link, index) => {
          return (
            <li key={link.id}>
              <a
                href="#"
                className={`flex gap-3 items-center px-5 py-3.5  text-lg rounded-lg transition-all duration-300 ${
                  activeLink === index ? "bg-primary text-black" : ""
                }`}
                onClick={() => setActiveLink(index)}
              >
                {link.icon} <span>{link.title} </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
