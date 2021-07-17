import React from "react";

const ARFrame = () => {
  return (
    <div>
      {/* <script src="http://aframe.io/releases/0.8.2/aframe.min.js"></script> */}
      {/* <script src="http://cdn.rawgit.com/jer0meetienne/AR.js/1.6.2/aframe/build/aframe-ar.js"></script> */}
      <div className="margin: 0px; overflow: hidden;">
        <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-box position="0 0.5 0" material="color: red;">
              <a-animation
                attribute="ratation"
                dur="3000"
                to="360 360 0"
                repeat="indefinite"
                easing="linear"
              ></a-animation>
            </a-box>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </div>
  );
};

export default ARFrame;
