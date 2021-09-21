import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="w-2/3 bg-white flex p-4 space-x-10">
      <div className="flex flex-col space-y-2 flex-grow">
        <h3 className="font-semibold">Acount Info</h3>
        <div className="border-b ">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="bg-transparent outline-none w-full"
          />
        </div>
        <CopyToClipboard text={me}>
          <button className="bg-blue-500 w-full py-1 rounded-md shadow-md text-white font-semibold">
            COPY YOUR ID
          </button>
        </CopyToClipboard>
      </div>
      <div className="flex flex-col space-y-2  flex-grow">
        <h3 className="font-semibold">Make a call</h3>
        <div className="border-b ">
          <input
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            type="text"
            placeholder="ID to Call"
            className="bg-transparent outline-none w-full"
          />
        </div>
        {callAccepted && !callEnded ? (
          <button
            onClick={leaveCall}
            className="bg-red-500 w-full py-1 rounded-md shadow-md text-white font-semibold"
          >
            HANG UP
          </button>
        ) : (
          <button
            onClick={() => callUser(idToCall)}
            className="bg-green-500 w-full py-1 rounded-md shadow-md text-white font-semibold"
          >
            CALL
          </button>
        )}
      </div>

      {children}
    </div>
  );
};

export default Options;
