import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import { PhoneIncomingIcon } from "@heroicons/react/solid";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className="flex flex-col space-y-5 justify-center">
          <p className="text-white">
            {call.name ? call.name : "Anonymous"} is calling..
          </p>
          <PhoneIncomingIcon className="h-8 text-red-900 animate-ping" />
          <button
            onClick={answerCall}
            className="bg-green-500 active:bg-green-600 flex justify-center items-center w-full py-1 rounded-md shadow-md text-white font-semibold "
          >
            ANSWER
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
