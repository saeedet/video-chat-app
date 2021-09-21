import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import {
  PhoneOutgoingIcon,
  PhoneMissedCallIcon,
  SparklesIcon,
} from "@heroicons/react/solid";

const Call = () => {
  const { callAccepted, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [calling, setCalling] = useState(false);

  const callHandler = () => {
    callUser(idToCall);
    setCalling(true);
  };

  return (
    <div className="flex flex-col space-y-2">
      {callAccepted && !callEnded ? (
        <button
          onClick={leaveCall}
          className="bg-red-500 active:bg-red-600 flex justify-center items-center w-full py-1 rounded-md shadow-md text-white font-semibold"
        >
          <PhoneMissedCallIcon className="h-4 mr-2" />
          HANG UP
        </button>
      ) : (
        <>
          <div className="border-b ">
            <input
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              type="text"
              placeholder="ID to Call"
              className="bg-transparent outline-none w-full placeholder-white text-white"
            />
          </div>
          <button
            onClick={callHandler}
            className="bg-green-500 active:bg-green-600 flex justify-center items-center w-full py-1 rounded-md shadow-md text-white font-semibold "
          >
            <PhoneOutgoingIcon className="h-4 mr-2" />
            {calling ? (
              <span className="animate-pulse">CALLING...</span>
            ) : (
              "CALL"
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default Call;
