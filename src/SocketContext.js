import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

//initialize the socket connection between user and the server
// const socket = io("http://localhost:5000/");
const socket = io("https://et-video-chat.herokuapp.com/");

const ContextProvider = ({ children }) => {
  //states
  const [stream, setStream] = useState(null);
  const [socketId, setSocketId] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  //refs
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    //ask user permission to use video and audio
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        //set the stream state to the user's video stream
        setStream(currentStream);
        // populate myVideo ref to show it on peer1 frontend
        myVideo.current.srcObject = currentStream;
      });

    // Register a handler for "socketid" event
    socket.on("socketid", (id) => setSocketId(id));

    // Register a handler for "usercalling" event to get the caller info
    socket.on("usercalling", ({ signal, callerId, callerName }) => {
      setCall({ isReceivedCall: true, callerId, callerName, signal });
    });
  }, []);

  const callUser = (idToCall) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    //send signaling data to the remote peer.
    peer.on("signal", (data) => {
      //emit "calluser" event to the socket
      socket.emit("calluser", {
        userToCall: idToCall,
        signalData: data,
        callerId: socketId,
        callerName: name,
      });
    });

    //get the remote peer video stream and populate the related ref to show it on frontend
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    // Register a handler for "callaccepted" event
    socket.on("callaccepted", (data) => {
      setCallAccepted(true);
      peer.signal(data.signal);
      setCall((prev) => ({ ...prev, callerName: data.peer2Name }));
    });
    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);

    //Create a new WebRTC peer connection.
    const peer = new Peer({ initiator: false, trickle: false, stream });

    //send signaling data to the remote peer.
    peer.on("signal", (data) => {
      //emit "answercall" event to the socket
      socket.emit("answercall", {
        signal: data,
        callerId: call.callerId,
        name: name,
      });
    });

    //get the remote peer video stream and populate the related ref to show it on frontend
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        socketId,
        callUser,
        leaveCall,
        answerCall,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
