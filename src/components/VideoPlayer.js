import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="flex space-x-4 justify-center w-full px-4">
      {stream && (
        <div className=" p-3 rounded-md bg-green-400">
          {/* <h3 className=" flex justify-center">{name || "User"}</h3> */}
          <video
            className="rounded-md"
            playsInline
            muted
            autoPlay
            ref={myVideo}
          />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className=" p-3 rounded-md bg-blue-400">
          {/* <h3 className="w-full flex justify-center">{call.name || "User"}</h3> */}
          <video className="rounded-md" playsInline autoPlay ref={userVideo} />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
