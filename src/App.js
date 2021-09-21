import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col items-center flex-grow">
        <Header />
        <VideoPlayer />
      </div>
    </div>
  );
};

export default App;
