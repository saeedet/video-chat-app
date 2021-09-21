import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DocumentDuplicateIcon } from "@heroicons/react/solid";

const User = () => {
  const { socketId, name, setName } = useContext(SocketContext);
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="border-b">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          className="bg-transparent outline-none w-full placeholder-white text-white"
        />
      </div>
      <div className="mt-10">
        <p className="w-full  flex justify-between">
          <span className="text-white whitespace-nowrap">Your ID:</span>{" "}
          <span className="whitespace-nowrap text-blue-500 ml-1">
            {socketId && socketId}
          </span>
        </p>
        <div className="flex justify-end w-full mt-5">
          <span
            className={` text-sm mr-3 ${
              copied ? "text-green-400" : "text-white"
            }`}
          >
            {copied ? "Copied." : "Copy"}
          </span>
          <CopyToClipboard text={socketId}>
            <button
              className="bg-blue-400 rounded-md w-5  shadow-md text-gray-300 active:bg-blue-500"
              onClick={() => setCopied(true)}
            >
              <DocumentDuplicateIcon />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default User;
