import React from "react";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div className=" flex flex-col items-center py-5  space-y-5">
      <div className="bg-white w-1/3 flex justify-center items-center py-1 rounded-md border-2 border-black">
        <h1 className="font-bold text-3xl">Video Chat</h1>
      </div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
