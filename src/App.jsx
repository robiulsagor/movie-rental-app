import { useContext } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./context/MovieContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${isDark ? "dark" : ""} dark:bg-black`}>
      <Header />
      <div className=" container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
