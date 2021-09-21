import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className="flex justify-center">
          <p>{call.name} is calling..</p>
          <button onClick={answerCall} className="bg-green-500">
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
