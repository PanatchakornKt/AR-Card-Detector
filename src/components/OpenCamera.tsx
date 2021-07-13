import React, { useRef } from "react";
import Webcam from "react-webcam";

const OpenCamera = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div className="text-center mt-4">
      <header className="App-header">
        <span className="text-2xl">Open Camera</span>
        <Webcam
          ref={webcamRef}
          className="absolute ml-auto mr-auto right-0 left-0 z-10 w-full h-full"
        />
        <canvas className="absolute ml-auto mr-auto right-0 left-0 z-10 w-full h-full"></canvas>
      </header>
    </div>
  );
};

export default OpenCamera;
