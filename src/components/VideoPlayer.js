import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="flex space-x-4 justify-center w-full px-4 mt-6">
      {stream && (
        <div className=" flex flex-col justify-center p-3 rounded-md bg-green-400 w-1/2">
          <video
            className="rounded-md w-full"
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
        <div className=" flex flex-col justify-center p-3 rounded-md bg-blue-400 w-1/2">
          <video
            className="rounded-md  w-full"
            playsInline
            autoPlay
            ref={userVideo}
          />
          <h3 className="flex justify-center text-white font-bold text-xl mt-2">
            {call.callerName || "User"}
          </h3>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
