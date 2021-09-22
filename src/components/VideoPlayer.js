import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="flex space-x-4 justify-center w-full px-4 mt-6">
      {stream && (
        <div className=" p-3 rounded-md bg-green-400">
          <video
            className="rounded-md"
            playsInline
            muted
            autoPlay
            ref={myVideo}
          />
          <h3 className=" flex justify-center text-white font-bold text-xl mt-2">
            {name || "User"}
          </h3>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className=" p-3 rounded-md bg-blue-400">
          <video className="rounded-md" playsInline autoPlay ref={userVideo} />
          <h3 className="flex justify-center text-white font-bold text-xl mt-2">
            {call.name || "User"}
          </h3>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
