import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="flex space-x-4 justify-center w-full ">
      {stream && (
        <div className="bg-white w-1/2 rounded-full">
          <h3 className="w-full flex justify-center">{name || "User"}</h3>
          <video
            className="rounded-full w-full"
            playsInline
            muted
            autoPlay
            ref={myVideo}
          />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="bg-white w-1/2  rounded-full">
          <h3 className="w-full flex justify-center">{call.name || "User"}</h3>
          <video
            className="rounded-full w-full"
            playsInline
            autoPlay
            ref={userVideo}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
